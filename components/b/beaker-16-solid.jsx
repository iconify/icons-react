import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/devb-9bdm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="devb-9bdm"/>`,
		"fallback": "heroicons:beaker-16-solid",
	});
}

export default Component;
