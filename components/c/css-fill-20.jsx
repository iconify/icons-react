import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdxjy7b8y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdxjy7b8y"/>`,
		"fallback": "garden:css-fill-20",
	});
}

export default Component;
