import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abp66bccv.css';
import '../../css/l/lbxq68bjj.css';
import '../../css/o/oa06op6-i.css';
import '../../css/b/b5kcsg5uj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="abp66bccv"/><path class="lbxq68bjj"/><path class="oa06op6-i"/><path class="b5kcsg5uj"/></g>`,
		"fallback": "streamline-color:alien",
	});
}

export default Component;
