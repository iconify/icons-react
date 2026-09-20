import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_c-jnbyt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_c-jnbyt"/>`,
		"fallback": "uiw:android-o",
	});
}

export default Component;
