import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/am7ko-blv.css';
import '../../css/z/zft29j7rf.css';
import '../../css/y/yzz5h13jf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="am7ko-blv"/><path class="zft29j7rf"/><path class="yzz5h13jf"/></g>`,
		"fallback": "streamline:figma",
	});
}

export default Component;
