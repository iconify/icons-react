import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc21hcbgh.css';
import '../../css/o/o5x0bvbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc21hcbgh"/><path clip-rule="evenodd" class="o5x0bvbtb"/>`,
		"fallback": "stash:browser-light",
	});
}

export default Component;
