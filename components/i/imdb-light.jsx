import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axc2gplka.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axc2gplka"/>`,
		"fallback": "selfhst:imdb-light",
	});
}

export default Component;
