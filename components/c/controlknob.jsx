import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrmchxbkx.css';
import '../../css/c/ct8h_-63x.css';
import '../../css/i/ix-wrkbcl.css';
import '../../css/g/gt8_c-sxg.css';
import '../../css/n/nvux4rq-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrmchxbkx"/><path class="ct8h_-63x"/><path class="ix-wrkbcl"/><path class="gt8_c-sxg"/><path class="nvux4rq-g"/>`,
		"fallback": "fxemoji:controlknob",
	});
}

export default Component;
