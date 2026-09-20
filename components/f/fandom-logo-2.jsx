import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/ze865y8yg.css';
import '../../css/q/qykhsqbze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="ze865y8yg"/><path class="qykhsqbze"/></g>`,
		"fallback": "streamline-logos:fandom-logo-2",
	});
}

export default Component;
