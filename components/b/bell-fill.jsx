import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndwu0pb4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndwu0pb4x"/>`,
		"fallback": "gravity-ui:bell-fill",
	});
}

export default Component;
