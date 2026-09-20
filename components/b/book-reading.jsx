import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aovxu-bqv.css';
import '../../css/h/huqaq53uc.css';
import '../../css/x/xm0m1jbzf.css';
import '../../css/y/yzpbxo3et.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aovxu-bqv"/><path class="huqaq53uc"/><path class="xm0m1jbzf"/><path class="yzpbxo3et"/></g>`,
		"fallback": "streamline-flex-color:book-reading",
	});
}

export default Component;
