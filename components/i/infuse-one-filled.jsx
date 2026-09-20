import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u78s60hcf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u78s60hcf"/>`,
		"fallback": "lsicon:infuse-one-filled",
	});
}

export default Component;
