import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/moq05mb-i.css';
import '../../css/a/a0mbibbru.css';
import '../../css/f/f_ibfg0zm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="moq05mb-i"/><path class="a0mbibbru"/><path class="f_ibfg0zm"/></g>`,
		"fallback": "streamline-ultimate:harddrive-download-2",
	});
}

export default Component;
