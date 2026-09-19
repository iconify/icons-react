import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye52r9bed.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ye52r9bed"/>`,
		"fallback": "gravity-ui:house",
	});
}

export default Component;
