import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mv44ndpyy.css';
import '../../css/w/w127hmxoc.css';
import '../../css/v/v7ddn7k9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mv44ndpyy"/><path class="w127hmxoc"/><path class="v7ddn7k9r"/></g>`,
		"fallback": "streamline-freehand-color:face-id-user",
	});
}

export default Component;
