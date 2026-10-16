import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cn87rsbwd.css';
import '../../css/l/laahlfxkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cn87rsbwd"/><path class="laahlfxkj"/>`,
		"fallback": "energy-icons:immersion-heater-48-bold",
	});
}

export default Component;
