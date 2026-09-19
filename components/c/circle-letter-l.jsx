import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc0419z2a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bc0419z2a"/>`,
		"fallback": "gravity-ui:circle-letter-l",
	});
}

export default Component;
