import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/h/hnusc6b0j.css';
import '../../css/o/orukzkbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="hnusc6b0j"/><path class="orukzkbrm"/></g>`,
		"fallback": "streamline-cyber-color:at-sign",
	});
}

export default Component;
