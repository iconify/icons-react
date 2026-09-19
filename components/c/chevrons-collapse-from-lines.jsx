import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxf0fbrjq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xxf0fbrjq"/>`,
		"fallback": "gravity-ui:chevrons-collapse-from-lines",
	});
}

export default Component;
