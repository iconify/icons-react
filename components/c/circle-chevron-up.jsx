import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sysu8gbvl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sysu8gbvl"/>`,
		"fallback": "gravity-ui:circle-chevron-up",
	});
}

export default Component;
