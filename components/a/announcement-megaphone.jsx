import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o3cx_ebxb.css';
import '../../css/n/n0skqdbbc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o3cx_ebxb"/><path class="n0skqdbbc"/></g>`,
		"fallback": "streamline:announcement-megaphone",
	});
}

export default Component;
