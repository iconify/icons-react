import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t65_lkbjj.css';
import '../../css/c/cd8updtas.css';
import '../../css/y/y71c1szyb.css';
import '../../css/b/bmts5lb4w.css';
import '../../css/d/dlhqvvbdg.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(-6.66 100.49)" class="t65_lkbjj"><ellipse transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)" class="cd8updtas"/><ellipse transform="matrix(-.3005 .95378 -.96071 -.27755 0 0)" class="y71c1szyb"/><ellipse transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)" class="bmts5lb4w"/><ellipse transform="matrix(-.95378 -.3005 .27755 -.96071 0 0)" class="dlhqvvbdg"/></g>`,
		"fallback": "material-icon-theme:dotjs",
	});
}

export default Component;
