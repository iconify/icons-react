import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p61-0ivql.css';
import '../../css/z/zq0gwsbsg.css';
import '../../css/v/vwfxsk2ax.css';
import '../../css/o/o4nfhsbox.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p61-0ivql"/><path class="zq0gwsbsg"/><path class="vwfxsk2ax"/><path class="o4nfhsbox"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-angola",
	});
}

export default Component;
