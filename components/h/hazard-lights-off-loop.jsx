import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/o/ockota.css';
import '../../css/z/zxndow.css';
import '../../css/k/kj2bfh.css';
import '../../css/o/oeeggn.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/f/fo5bbb.css';
import '../../css/s/so-from-28.css';
import '../../css/d/d-7xq8qc.css';
import '../../css/d/d-7h3jep.css';
import '../../css/f/fade-qhlvwz.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGJFeVyu6j"><path class="c5xdmn ockota zxndow"/><path class="c5xdmn kj2bfh zxndow"/><path class="c5xdmn oeeggn t-ne3j"/></mask></defs><path mask="url(#SVGJFeVyu6j)" class="botfzx"/><path class="c5xdmn fo5bbb t-ne3j"/>`,
		"fallback": "line-md:hazard-lights-off-loop",
	});
}

export default Component;
