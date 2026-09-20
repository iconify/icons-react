import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_bhh3b7y.css';
import '../../css/c/c6uuuxbuc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_bhh3b7y"/><path class="c6uuuxbuc"/>`,
		"fallback": "selfhst:gopeed",
	});
}

export default Component;
