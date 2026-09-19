import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz7yt3bvs.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz7yt3bvs"/>`,
		"fallback": "dashicons:editor-spellcheck",
	});
}

export default Component;
