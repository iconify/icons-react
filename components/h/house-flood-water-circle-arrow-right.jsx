import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndsgikbwf.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndsgikbwf"/>`,
		"fallback": "fa6-solid:house-flood-water-circle-arrow-right",
	});
}

export default Component;
