import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkz6xik2i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gkz6xik2i"/>`,
		"fallback": "gravity-ui:chevrons-expand-to-lines",
	});
}

export default Component;
