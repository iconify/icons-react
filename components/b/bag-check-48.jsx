import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb2gho-_w.css';
import '../../css/z/ztjblhbxw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb2gho-_w"/><path class="ztjblhbxw"/>`,
		"fallback": "energy-icons:bag-check-48",
	});
}

export default Component;
