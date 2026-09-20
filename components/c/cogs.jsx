import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meiu8obml.css';
import '../../css/g/gvguocbho.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meiu8obml"/><path class="gvguocbho"/>`,
		"fallback": "vaadin:cogs",
	});
}

export default Component;
