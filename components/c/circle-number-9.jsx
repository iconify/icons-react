import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fflh7irpx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fflh7irpx"/>`,
		"fallback": "gravity-ui:circle-number-9",
	});
}

export default Component;
