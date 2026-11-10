import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tje_rgu0e.css';
import '../../css/b/b8uhdggbp.css';
import '../../css/a/asmyp4_rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="tje_rgu0e"/><path class="b8uhdggbp"/><path class="asmyp4_rf"/></g>`,
		"fallback": "matita:banknote",
	});
}

export default Component;
