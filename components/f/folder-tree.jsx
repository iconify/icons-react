import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo2usibuo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mo2usibuo"/>`,
		"fallback": "gravity-ui:folder-tree",
	});
}

export default Component;
