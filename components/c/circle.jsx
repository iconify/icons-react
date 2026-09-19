import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga38r-27b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ga38r-27b"/>`,
		"fallback": "gravity-ui:circle",
	});
}

export default Component;
