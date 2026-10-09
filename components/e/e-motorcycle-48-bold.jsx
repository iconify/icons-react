import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hliyo-bto.css';
import '../../css/p/pxuausb5x.css';
import '../../css/v/vy9bxel0f.css';
import '../../css/r/ra4sd8ben.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hliyo-bto"/><path class="pxuausb5x"/><path class="vy9bxel0f"/><path class="ra4sd8ben"/>`,
		"fallback": "energy-icons:e-motorcycle-48-bold",
	});
}

export default Component;
