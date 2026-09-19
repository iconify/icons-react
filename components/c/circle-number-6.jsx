import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcxj16bvb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zcxj16bvb"/>`,
		"fallback": "gravity-ui:circle-number-6",
	});
}

export default Component;
