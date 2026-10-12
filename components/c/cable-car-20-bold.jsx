import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy6sxlqhk.css';
import '../../css/b/bxahjo3ap.css';
import '../../css/y/ycnogikcx.css';
import '../../css/j/j37rrvywc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy6sxlqhk"/><path class="bxahjo3ap"/><path class="ycnogikcx"/><path class="j37rrvywc"/>`,
		"fallback": "energy-icons:cable-car-20-bold",
	});
}

export default Component;
