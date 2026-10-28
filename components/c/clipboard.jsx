import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/z/z3go2ebih.css';
import '../../css/h/hp02mkbov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="z3go2ebih"/><rect class="hp02mkbov"/></g>`,
		"fallback": "codex:clipboard",
	});
}

export default Component;
