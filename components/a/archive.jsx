import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rjf8g8byq.css';
import '../../css/o/oo4uf-24y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="rjf8g8byq"/><path class="oo4uf-24y"/></g>`,
		"fallback": "codex:archive",
	});
}

export default Component;
