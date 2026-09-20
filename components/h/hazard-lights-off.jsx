import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/o/ockota.css';
import '../../css/z/zxndow.css';
import '../../css/c/ckfi2i.css';
import '../../css/o/oeeggn.css';
import '../../css/t/t-ne3j.css';
import '../../css/b/botfzx.css';
import '../../css/f/fo5bbb.css';
import '../../css/s/so-from-28.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-z2xg2d.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnJjoSbqD"><path class="c5xdmn ockota zxndow"/><path class="c5xdmn ckfi2i zxndow"/><path class="c5xdmn oeeggn t-ne3j"/></mask></defs><path mask="url(#SVGnJjoSbqD)" class="botfzx"/><path class="c5xdmn fo5bbb t-ne3j"/>`,
		"fallback": "line-md:hazard-lights-off",
	});
}

export default Component;
