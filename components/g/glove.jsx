import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afk0occja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afk0occja"/>`,
		"fallback": "icon-park-outline:glove",
	});
}

export default Component;
