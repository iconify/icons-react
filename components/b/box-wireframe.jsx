import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phar-mw6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="phar-mw6g"/>`,
		"fallback": "at-icons:box-wireframe",
	});
}

export default Component;
