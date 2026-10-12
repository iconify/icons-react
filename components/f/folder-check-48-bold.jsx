import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thz0iw5vf.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thz0iw5vf"/><path class="hwjgqrbah"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:folder-check-48-bold",
	});
}

export default Component;
