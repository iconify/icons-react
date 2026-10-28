import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/r/r_txeplml.css';
import '../../css/o/orvpyybli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="r_txeplml"/><path class="orvpyybli"/></g>`,
		"fallback": "codex:desktop",
	});
}

export default Component;
