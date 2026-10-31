import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vyz4atbli.css';
import '../../css/j/jksxcb43r.css';
import '../../css/s/sb9ehlgmy.css';
import '../../css/v/vrlvv_bkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vyz4atbli wm-shadow"/><path class="jksxcb43r wm-shadow"/><path class="sb9ehlgmy"/><path class="vrlvv_bkm"/></g>`,
		"fallback": "withicons-brutal:corner-down-left",
	});
}

export default Component;
