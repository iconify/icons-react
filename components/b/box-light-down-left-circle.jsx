import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgprs5nyr.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgprs5nyr"/>`,
		"fallback": "memory:box-light-down-left-circle",
	});
}

export default Component;
