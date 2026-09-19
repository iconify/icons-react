import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ho8soe5tw.css';
import '../../css/e/estwjkbcw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ho8soe5tw"/><path class="estwjkbcw"/>`,
		"fallback": "fxemoji:chineseflag",
	});
}

export default Component;
