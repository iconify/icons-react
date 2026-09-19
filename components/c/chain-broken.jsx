import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di2cjrb4a.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di2cjrb4a"/>`,
		"fallback": "fa:chain-broken",
	});
}

export default Component;
