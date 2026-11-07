import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpj8th5qt.css';
import '../../css/t/tev9i0bxp.css';
import '../../css/j/j9_7gjbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zpj8th5qt"/><path clip-rule="evenodd" class="tev9i0bxp"/><path class="j9_7gjbkz"/>`,
		"fallback": "solar:gallery-wide-bold",
	});
}

export default Component;
