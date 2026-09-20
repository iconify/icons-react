import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stk0jfp5a.css';
import '../../css/s/sjc8stbkt.css';

const viewBox = {"width":196,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stk0jfp5a"/><path class="sjc8stbkt"/>`,
		"fallback": "thesvg-color:afordin-light",
	});
}

export default Component;
