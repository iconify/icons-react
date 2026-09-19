import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-hb33v6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-hb33v6a"/>`,
		"fallback": "icon-park-outline:cup-one",
	});
}

export default Component;
