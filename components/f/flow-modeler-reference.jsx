import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1za3mggn.css';
import '../../css/s/s130yc3zu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1za3mggn"/><path class="s130yc3zu"/>`,
		"fallback": "carbon:flow-modeler-reference",
	});
}

export default Component;
