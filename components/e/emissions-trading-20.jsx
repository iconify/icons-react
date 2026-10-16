import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzhw0_b9f.css';
import '../../css/q/qd81l2bmk.css';
import '../../css/l/lq2wswb9f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzhw0_b9f"/><path class="qd81l2bmk"/><path class="lq2wswb9f"/>`,
		"fallback": "energy-icons:emissions-trading-20",
	});
}

export default Component;
