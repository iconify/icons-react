import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/seue9tcsz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="seue9tcsz"/>`,
		"fallback": "gravity-ui:heading",
	});
}

export default Component;
