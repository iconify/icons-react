import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp06m64up.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cp06m64up"/>`,
		"fallback": "gravity-ui:arrow-uturn-cw-left",
	});
}

export default Component;
