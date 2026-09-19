import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra7jpmkfp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra7jpmkfp"/>`,
		"fallback": "at-icons:beaker",
	});
}

export default Component;
