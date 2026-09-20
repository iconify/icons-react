import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di16lc9hz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="di16lc9hz"/>`,
		"fallback": "lsicon:infuse-two-filled",
	});
}

export default Component;
