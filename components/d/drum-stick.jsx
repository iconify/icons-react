import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z8bxujbug.css';
import '../../css/m/mj-7rwx4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z8bxujbug"/><path class="mj-7rwx4v"/></g>`,
		"fallback": "streamline-sharp:drum-stick",
	});
}

export default Component;
