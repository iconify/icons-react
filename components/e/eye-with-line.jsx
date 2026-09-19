import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brxv_3lse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brxv_3lse"/>`,
		"fallback": "entypo:eye-with-line",
	});
}

export default Component;
