import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq491_u9m.css';
import '../../css/r/rjc2wjb6s.css';
import '../../css/b/bq3zunblc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wq491_u9m"/><path class="rjc2wjb6s"/><path class="bq3zunblc"/>`,
		"fallback": "energy-icons:drum-20-bold",
	});
}

export default Component;
