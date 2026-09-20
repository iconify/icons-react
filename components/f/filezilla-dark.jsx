import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur72ib6mp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur72ib6mp"/>`,
		"fallback": "selfhst:filezilla-dark",
	});
}

export default Component;
