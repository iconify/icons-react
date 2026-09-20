import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m8jnzqbdy.css';
import '../../css/h/hyih-4b5l.css';
import '../../css/l/ledvo0j9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m8jnzqbdy"/><path clip-rule="evenodd" class="hyih-4b5l"/><path clip-rule="evenodd" class="ledvo0j9y"/></g>`,
		"fallback": "reicon:black-hole",
	});
}

export default Component;
