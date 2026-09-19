import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l4krmkb6l.css';
import '../../css/l/lfa6seb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="l4krmkb6l"/><rect class="lfa6seb7d"/></g>`,
		"fallback": "codex:clipboard",
	});
}

export default Component;
