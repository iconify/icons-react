import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqd3vf-lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqd3vf-lu"/>`,
		"fallback": "stash:content-share-solid",
	});
}

export default Component;
