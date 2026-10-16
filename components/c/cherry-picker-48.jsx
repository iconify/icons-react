import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvqwjdbok.css';
import '../../css/f/fb99aacni.css';
import '../../css/c/c-5-uyb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvqwjdbok"/><path class="fb99aacni"/><path class="c-5-uyb3i"/>`,
		"fallback": "energy-icons:cherry-picker-48",
	});
}

export default Component;
