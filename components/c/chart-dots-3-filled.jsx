import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss7jp2b5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss7jp2b5s"/>`,
		"fallback": "tabler:chart-dots-3-filled",
	});
}

export default Component;
