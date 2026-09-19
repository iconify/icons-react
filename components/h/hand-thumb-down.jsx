import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh_m7bbcg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh_m7bbcg"/>`,
		"fallback": "heroicons-solid:hand-thumb-down",
	});
}

export default Component;
