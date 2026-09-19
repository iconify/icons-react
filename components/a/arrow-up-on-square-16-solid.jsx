import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8htw_vfp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8htw_vfp"/>`,
		"fallback": "heroicons:arrow-up-on-square-16-solid",
	});
}

export default Component;
