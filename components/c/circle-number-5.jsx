import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gerp8mb1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gerp8mb1o"/>`,
		"fallback": "gravity-ui:circle-number-5",
	});
}

export default Component;
