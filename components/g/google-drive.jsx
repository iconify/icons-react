import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8dmnm1kf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8dmnm1kf"/>`,
		"fallback": "fa6-brands:google-drive",
	});
}

export default Component;
