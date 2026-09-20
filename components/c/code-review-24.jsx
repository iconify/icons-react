import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz885nfzw.css';
import '../../css/p/p_2ax6o9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz885nfzw"/><path class="p_2ax6o9y"/>`,
		"fallback": "octicon:code-review-24",
	});
}

export default Component;
