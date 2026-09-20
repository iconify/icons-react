import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3rqywy7o.css';
import '../../css/a/acwejz0_o.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3rqywy7o"/><path class="acwejz0_o"/>`,
		"fallback": "openmoji:hand-with-fingers-splayed-medium-light-skin-tone",
	});
}

export default Component;
