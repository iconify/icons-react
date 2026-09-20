import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp2r4p57i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp2r4p57i"/>`,
		"fallback": "tabler:align-box-right-middle",
	});
}

export default Component;
