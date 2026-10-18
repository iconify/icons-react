import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnr7hi9rx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnr7hi9rx"/>`,
		"fallback": "vadivam:flame",
	});
}

export default Component;
