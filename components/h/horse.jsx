import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caf_-wbkv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="caf_-wbkv"/>`,
		"fallback": "pinhead:horse",
	});
}

export default Component;
