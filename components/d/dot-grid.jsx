import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj5h5m4vp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yj5h5m4vp"/>`,
		"fallback": "pajamas:dot-grid",
	});
}

export default Component;
