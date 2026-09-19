import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fct2vly4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fct2vly4p"/>`,
		"fallback": "icon-park-outline:block-eight",
	});
}

export default Component;
