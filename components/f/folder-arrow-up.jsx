import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lji0e9b-j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lji0e9b-j"/>`,
		"fallback": "gravity-ui:folder-arrow-up",
	});
}

export default Component;
