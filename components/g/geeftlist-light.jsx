import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7f8ufmsj.css';
import '../../css/b/bmz8mu02n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7f8ufmsj"/><path class="bmz8mu02n"/>`,
		"fallback": "selfhst:geeftlist-light",
	});
}

export default Component;
