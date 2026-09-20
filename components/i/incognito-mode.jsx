import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1zmc-0cb.css';
import '../../css/n/nhwtdlz6n.css';
import '../../css/s/s2h5y80zl.css';
import '../../css/g/g1ponfbfa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1zmc-0cb"/><path class="nhwtdlz6n"/><path class="s2h5y80zl"/><path class="g1ponfbfa"/></g>`,
		"fallback": "streamline-color:incognito-mode",
	});
}

export default Component;
