import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctrib4bsz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ctrib4bsz"/>`,
		"fallback": "gravity-ui:circle-number-7",
	});
}

export default Component;
