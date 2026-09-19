import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gv15nl59b.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gv15nl59b"/>`,
		"fallback": "topcoat:dribble",
	});
}

export default Component;
