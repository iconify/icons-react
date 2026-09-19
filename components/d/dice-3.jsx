import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pm5btrboz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pm5btrboz"/>`,
		"fallback": "gravity-ui:dice-3",
	});
}

export default Component;
