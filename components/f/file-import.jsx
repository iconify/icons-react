import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mph4c5b3i.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mph4c5b3i"/>`,
		"fallback": "fa7-solid:file-import",
	});
}

export default Component;
