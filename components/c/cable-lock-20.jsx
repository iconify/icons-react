import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2gsbjbrx.css';
import '../../css/k/kmot23zoj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2gsbjbrx"/><path class="kmot23zoj"/>`,
		"fallback": "energy-icons:cable-lock-20",
	});
}

export default Component;
