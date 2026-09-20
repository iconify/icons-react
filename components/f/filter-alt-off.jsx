import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/f/fhjn7n.css';
import '../../css/z/zxndow.css';
import '../../css/t/tj796y.css';
import '../../css/o/otlizu.css';
import '../../css/d/dw7e4l.css';
import '../../css/l/lwtq5s.css';
import '../../css/b/botfzx.css';
import '../../css/r/r5412d.css';
import '../../css/s/so-from-18.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGzgHVsdWf"><path class="c5xdmn fhjn7n zxndow"/><path class="c5xdmn tj796y zxndow"/><path class="c5xdmn otlizu zxndow"/><path class="c5xdmn dw7e4l lwtq5s"/></mask></defs><path mask="url(#SVGzgHVsdWf)" class="botfzx"/><path class="c5xdmn dw7e4l r5412d"/>`,
		"fallback": "line-md:filter-alt-off",
	});
}

export default Component;
