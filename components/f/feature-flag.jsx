import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_o-v-b_t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x_o-v-b_t"/>`,
		"fallback": "pajamas:feature-flag",
	});
}

export default Component;
