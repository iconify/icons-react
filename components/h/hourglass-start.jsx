import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2dw7_bdn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2dw7_bdn"/>`,
		"fallback": "gravity-ui:hourglass-start",
	});
}

export default Component;
