import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1ao39bew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c1ao39bew"/>`,
		"fallback": "stash:content-share-light",
	});
}

export default Component;
