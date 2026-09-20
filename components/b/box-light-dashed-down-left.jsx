import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1jw05y-a.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1jw05y-a"/>`,
		"fallback": "memory:box-light-dashed-down-left",
	});
}

export default Component;
