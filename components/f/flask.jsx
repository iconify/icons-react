import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge8uhqukk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ge8uhqukk"/>`,
		"fallback": "gravity-ui:flask",
	});
}

export default Component;
