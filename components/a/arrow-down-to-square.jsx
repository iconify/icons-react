import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_o-vlmlv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j_o-vlmlv"/>`,
		"fallback": "gravity-ui:arrow-down-to-square",
	});
}

export default Component;
