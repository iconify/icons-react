import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rj2xaobyj.css';
import '../../css/b/bfezebbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="rj2xaobyj"/><path class="bfezebbwk"/></g>`,
		"fallback": "lets-icons:arhive-export",
	});
}

export default Component;
