import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmmy7cgwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jmmy7cgwq"/>`,
		"fallback": "griddy-icons:arrow-split-down-alt",
	});
}

export default Component;
