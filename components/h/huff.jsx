import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifuufmagt.css';
import '../../css/u/ubv5z7b4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ifuufmagt"/><path class="ubv5z7b4j"/>`,
		"fallback": "material-icon-theme:huff",
	});
}

export default Component;
