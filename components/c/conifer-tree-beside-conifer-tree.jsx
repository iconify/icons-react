import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm4js56by.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm4js56by"/>`,
		"fallback": "pinhead:conifer-tree-beside-conifer-tree",
	});
}

export default Component;
