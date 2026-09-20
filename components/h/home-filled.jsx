import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pek76-bkx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pek76-bkx"/>`,
		"fallback": "lsicon:home-filled",
	});
}

export default Component;
