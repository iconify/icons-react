import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5jdrdkjw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5jdrdkjw"/>`,
		"fallback": "material-icon-theme:hosts",
	});
}

export default Component;
