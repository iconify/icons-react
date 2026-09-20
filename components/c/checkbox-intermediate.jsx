import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mledk5bal.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mledk5bal"/>`,
		"fallback": "memory:checkbox-intermediate",
	});
}

export default Component;
