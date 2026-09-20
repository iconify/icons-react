import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmgb4967r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmgb4967r"/>`,
		"fallback": "pinhead:four-pips",
	});
}

export default Component;
