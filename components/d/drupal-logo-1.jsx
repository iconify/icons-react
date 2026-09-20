import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/enyr3comf.css';
import '../../css/j/jg5rodh3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="enyr3comf"/><path class="jg5rodh3q"/></g>`,
		"fallback": "streamline-logos:drupal-logo-1",
	});
}

export default Component;
