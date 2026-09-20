import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd9r5cegh.css';
import '../../css/j/js6n1vb7u.css';
import '../../css/g/g0be4x18a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pd9r5cegh"/><path class="js6n1vb7u"/><path class="g0be4x18a"/></g>`,
		"fallback": "streamline-cyber-color:group-global",
	});
}

export default Component;
