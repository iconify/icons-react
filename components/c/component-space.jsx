import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0duzzbah.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/av3m8fbrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGaBjjIb9J" class="h0duzzbah"/></defs><g class="ft5dv1b6b"><use href="#SVGaBjjIb9J"/><use href="#SVGaBjjIb9J" class="av3m8fbrw"/></g>`,
		"fallback": "tdesign:component-space",
	});
}

export default Component;
