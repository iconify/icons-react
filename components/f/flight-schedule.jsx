import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjzjafblt.css';
import '../../css/j/ji95cg_id.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjzjafblt"/><path class="ji95cg_id"/>`,
		"fallback": "carbon:flight-schedule",
	});
}

export default Component;
