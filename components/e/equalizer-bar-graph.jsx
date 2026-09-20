import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c_4vt8bmq.css';
import '../../css/y/ya0_n30ja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="c_4vt8bmq"/><path class="ya0_n30ja"/></g>`,
		"fallback": "streamline-freehand-color:equalizer-bar-graph",
	});
}

export default Component;
