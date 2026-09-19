import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/v/v0i8j_brt.css';
import '../../css/s/sk_c-dokx.css';
import '../../css/c/cbpc6zbgf.css';
import '../../css/m/m5eds2f1v.css';
import '../../css/z/zxnpu1bvo.css';
import '../../css/p/pgldc5obn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle transform="rotate(90 8 4)" class="v0i8j_brt"/><circle transform="rotate(90 16 4)" class="sk_c-dokx"/><circle transform="rotate(90 8 12)" class="cbpc6zbgf"/><circle transform="rotate(90 16 12)" class="m5eds2f1v"/><circle transform="rotate(90 8 20)" class="zxnpu1bvo"/><circle transform="rotate(90 16 20)" class="pgldc5obn"/></g>`,
		"fallback": "akar-icons:drag-vertical",
	});
}

export default Component;
