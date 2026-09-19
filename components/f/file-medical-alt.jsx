import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxrpz4blo.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxrpz4blo"/>`,
		"fallback": "fa-solid:file-medical-alt",
	});
}

export default Component;
