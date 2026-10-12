import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewglqtbfj.css';
import '../../css/y/y882hsbhy.css';
import '../../css/e/eosacgbuh.css';
import '../../css/h/hfuybw6aj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewglqtbfj"/><path class="y882hsbhy"/><path class="eosacgbuh"/><path class="hfuybw6aj"/>`,
		"fallback": "energy-icons:broom-48-bold",
	});
}

export default Component;
