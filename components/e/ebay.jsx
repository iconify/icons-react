import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-jkv8bwc.css';
import '../../css/p/pgweqn4hi.css';
import '../../css/a/ab8n2w_il.css';
import '../../css/a/asbtooboc.css';
import '../../css/l/l350y_b3f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-jkv8bwc"/><path class="pgweqn4hi"/><path class="ab8n2w_il"/><path class="asbtooboc"/><path class="l350y_b3f"/>`,
		"fallback": "selfhst:ebay",
	});
}

export default Component;
