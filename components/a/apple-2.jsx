import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbz73rbno.css';
import '../../css/w/wem3j3bqk.css';
import '../../css/j/jk6gj8b-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fbz73rbno"/><path class="wem3j3bqk"/><path class="jk6gj8b-m"/></g>`,
		"fallback": "streamline-cyber-color:apple-2",
	});
}

export default Component;
