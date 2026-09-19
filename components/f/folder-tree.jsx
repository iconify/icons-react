import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u00ue5b6f.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u00ue5b6f"/>`,
		"fallback": "fa6-solid:folder-tree",
	});
}

export default Component;
