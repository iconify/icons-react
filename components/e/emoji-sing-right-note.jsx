import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/go06gob6r.css';
import '../../css/g/g-qv8bczh.css';
import '../../css/i/iibhdnb1d.css';
import '../../css/n/n6tiycbfr.css';
import '../../css/a/aorji3mah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="go06gob6r"/><path class="g-qv8bczh"/><path class="iibhdnb1d"/><path class="n6tiycbfr"/><path class="aorji3mah"/></g>`,
		"fallback": "iconoir:emoji-sing-right-note",
	});
}

export default Component;
