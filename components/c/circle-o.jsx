import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnv8y4ccs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnv8y4ccs"/>`,
		"fallback": "gis:circle-o",
	});
}

export default Component;
