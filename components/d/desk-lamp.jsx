import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ez4hw9bdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ez4hw9bdx"/>`,
		"fallback": "at-icons:desk-lamp",
	});
}

export default Component;
