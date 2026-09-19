import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/m/m6y9ru08g.css';
import '../../css/c/c-h-9wbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><path class="m6y9ru08g"/><path class="c-h-9wbun"/></g>`,
		"fallback": "hugeicons:dribbble",
	});
}

export default Component;
