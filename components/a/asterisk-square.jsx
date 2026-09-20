import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hx1y50bgb.css';
import '../../css/q/qekmy6abq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hx1y50bgb"/><path class="qekmy6abq"/></g>`,
		"fallback": "streamline-sharp-color:asterisk-square",
	});
}

export default Component;
