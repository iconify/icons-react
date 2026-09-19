import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnyegbblg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnyegbblg"/>`,
		"fallback": "dinkie-icons:die-face2",
	});
}

export default Component;
