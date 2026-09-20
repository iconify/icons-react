import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbthg9fde.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbthg9fde"/>`,
		"fallback": "streamline-block:basic-arrows-left",
	});
}

export default Component;
