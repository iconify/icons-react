import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar6ppzbnf.css';
import '../../css/a/av9ufk_wk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar6ppzbnf"/><path class="av9ufk_wk"/>`,
		"fallback": "garden:chart-arrow-trending-20",
	});
}

export default Component;
