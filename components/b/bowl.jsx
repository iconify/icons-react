import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rge-o4bqm.css';
import '../../css/f/f0o6t-o3z.css';
import '../../css/x/x6lifdc4z.css';
import '../../css/y/yddg_1e9n.css';
import '../../css/j/jwwpslqlg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rge-o4bqm"/><path class="f0o6t-o3z"/><path class="x6lifdc4z"/><path class="yddg_1e9n"/><path class="jwwpslqlg"/></g>`,
		"fallback": "matita:bowl",
	});
}

export default Component;
