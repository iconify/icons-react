import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6onabcla.css';
import '../../css/m/md286fbip.css';
import '../../css/t/t_vxkebwj.css';
import '../../css/n/nnhhj0b3v.css';
import '../../css/z/zt91rkbak.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="n6onabcla"/><g class="md286fbip"><path class="t_vxkebwj"/><path class="nnhhj0b3v"/><path class="zt91rkbak"/></g></g>`,
		"fallback": "cryptocurrency-color:aywa",
	});
}

export default Component;
