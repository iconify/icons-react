import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he8o9-b7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="he8o9-b7a"/>`,
		"fallback": "gravity-ui:arrow-down-from-line",
	});
}

export default Component;
