import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2oa95zkl.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f2oa95zkl"/><path class="xxvlnybzz"/>`,
		"fallback": "teenyicons:battery-5-solid",
	});
}

export default Component;
