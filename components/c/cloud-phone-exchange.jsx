import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yew-gackd.css';
import '../../css/g/g08h2if2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yew-gackd"/><path class="g08h2if2d"/></g>`,
		"fallback": "streamline-freehand-color:cloud-phone-exchange",
	});
}

export default Component;
