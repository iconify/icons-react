import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nhl82sb_n.css';
import '../../css/p/pq0-byl0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nhl82sb_n"/><path class="pq0-byl0q"/></g>`,
		"fallback": "mage:image",
	});
}

export default Component;
