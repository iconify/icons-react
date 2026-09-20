import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc_9edazi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc_9edazi"/>`,
		"fallback": "teenyicons:folder-outline",
	});
}

export default Component;
