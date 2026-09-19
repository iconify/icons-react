import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_3bmbf_x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_3bmbf_x"/>`,
		"fallback": "garden:horizontal-rule-fill-12",
	});
}

export default Component;
