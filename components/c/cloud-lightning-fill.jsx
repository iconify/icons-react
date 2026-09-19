import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlmv45btb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlmv45btb"/>`,
		"fallback": "bi:cloud-lightning-fill",
	});
}

export default Component;
