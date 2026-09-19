import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zbywh-bil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zbywh-bil"/>`,
		"fallback": "icon-park-outline:full-screen-one",
	});
}

export default Component;
