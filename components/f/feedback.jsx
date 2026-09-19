import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4_i2lb2g.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4_i2lb2g"/>`,
		"fallback": "topcoat:feedback",
	});
}

export default Component;
