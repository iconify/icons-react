import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u6hhftgjq.css';
import '../../css/f/f8oqxqy-v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u6hhftgjq"/><path class="f8oqxqy-v"/></g>`,
		"fallback": "streamline:bug",
	});
}

export default Component;
