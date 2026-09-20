import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogr483q8j.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogr483q8j"/>`,
		"fallback": "memory:alpha-d",
	});
}

export default Component;
