import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_1u3cc3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_1u3cc3l"/>`,
		"fallback": "tabler:chart-pie-2-filled",
	});
}

export default Component;
