import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-6n8ccpu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d-6n8ccpu"/>`,
		"fallback": "gravity-ui:circle-letter-r",
	});
}

export default Component;
