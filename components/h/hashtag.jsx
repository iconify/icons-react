import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9jgs1fzz.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9jgs1fzz"/>`,
		"fallback": "fa6-solid:hashtag",
	});
}

export default Component;
