import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzvhpvqbp.css';
import '../../css/w/wbplwt0gx.css';
import '../../css/x/xhtwkia_q.css';
import '../../css/l/l9_85xbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzvhpvqbp"/><path class="wbplwt0gx"/><path class="xhtwkia_q"/><path class="l9_85xbgg"/>`,
		"fallback": "bx:bxs-bowl-hot",
	});
}

export default Component;
