import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir2pffbtv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir2pffbtv"/>`,
		"fallback": "pinhead:conifer-tree-beside-conifer-tree-on-ground",
	});
}

export default Component;
