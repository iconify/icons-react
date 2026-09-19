import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uifgws5er.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uifgws5er"/>`,
		"fallback": "icon-park:bridge-one",
	});
}

export default Component;
