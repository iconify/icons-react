import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oaml5tb3x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oaml5tb3x"/>`,
		"fallback": "at-icons:clothes-hanger",
	});
}

export default Component;
