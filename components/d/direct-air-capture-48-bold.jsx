import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da8vm0ovg.css';
import '../../css/r/rtgzzxgel.css';
import '../../css/o/o-l1dwd8g.css';
import '../../css/k/kjg0k1bjz.css';
import '../../css/j/j9czx5wlk.css';
import '../../css/b/brg3ojbfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da8vm0ovg"/><path class="rtgzzxgel"/><path class="o-l1dwd8g"/><path class="kjg0k1bjz"/><path class="j9czx5wlk"/><path class="brg3ojbfd"/>`,
		"fallback": "energy-icons:direct-air-capture-48-bold",
	});
}

export default Component;
