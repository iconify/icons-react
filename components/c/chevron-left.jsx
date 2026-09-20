import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk2a72bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hk2a72bdd"/>`,
		"fallback": "stash:chevron-left",
	});
}

export default Component;
