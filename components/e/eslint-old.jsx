import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2zphtb3h.css';

const viewBox = {"width":498,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2zphtb3h"/>`,
		"fallback": "file-icons:eslint-old",
	});
}

export default Component;
