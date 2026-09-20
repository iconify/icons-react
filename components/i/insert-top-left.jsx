import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fgfh7-b1j.css';
import '../../css/l/ljd11pbnz.css';
import '../../css/n/n7h4onbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fgfh7-b1j"/><path class="ljd11pbnz"/><path class="n7h4onbjw"/></g>`,
		"fallback": "streamline-sharp-color:insert-top-left",
	});
}

export default Component;
