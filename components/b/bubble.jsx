import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qgctxwzlr.css';
import '../../css/o/ows_o8gdi.css';
import '../../css/q/qliqwmf6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="qgctxwzlr"/><circle class="ows_o8gdi"/><circle class="qliqwmf6r"/></g>`,
		"fallback": "lets-icons:bubble",
	});
}

export default Component;
