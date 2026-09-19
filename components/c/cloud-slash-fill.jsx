import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmfh31bxc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmfh31bxc"/>`,
		"fallback": "bi:cloud-slash-fill",
	});
}

export default Component;
