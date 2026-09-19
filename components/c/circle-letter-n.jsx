import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv9j0ibxe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hv9j0ibxe"/>`,
		"fallback": "gravity-ui:circle-letter-n",
	});
}

export default Component;
