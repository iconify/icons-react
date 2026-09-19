import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw0jjfbol.css';
import '../../css/a/a-uf0ibir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw0jjfbol"/><path class="a-uf0ibir"/>`,
		"fallback": "carbon:checkbox-indeterminate-filled",
	});
}

export default Component;
