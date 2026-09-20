import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb7_vlbxu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb7_vlbxu"/>`,
		"fallback": "map:fullscreen",
	});
}

export default Component;
