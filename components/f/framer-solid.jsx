import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jncj_it4v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jncj_it4v"/>`,
		"fallback": "teenyicons:framer-solid",
	});
}

export default Component;
