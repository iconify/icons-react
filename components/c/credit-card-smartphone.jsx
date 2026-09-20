import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yjlbdu1jl.css';
import '../../css/f/fs3te152g.css';
import '../../css/o/o4ikk4n8i.css';
import '../../css/n/n78r9lbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yjlbdu1jl"/><path class="fs3te152g"/><path class="o4ikk4n8i"/><path class="n78r9lbcf"/></g>`,
		"fallback": "streamline-freehand-color:credit-card-smartphone",
	});
}

export default Component;
