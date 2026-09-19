import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj-xp5bcy.css';
import '../../css/y/ym37o3bys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj-xp5bcy"/><path class="ym37o3bys"/>`,
		"fallback": "cryptocurrency:agi",
	});
}

export default Component;
