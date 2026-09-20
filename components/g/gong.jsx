import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpm3jpbta.css';
import '../../css/a/a4agvic7a.css';

const viewBox = {"width":171.3,"height":60};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpm3jpbta"/><path class="a4agvic7a"/>`,
		"fallback": "thesvg-color:gong",
	});
}

export default Component;
