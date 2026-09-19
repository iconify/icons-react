import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axbxhqb-g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axbxhqb-g"/>`,
		"fallback": "gravity-ui:circle-number-2",
	});
}

export default Component;
