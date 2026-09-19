import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qu7egmbzc.css';
import '../../css/h/hmy4ymk6a.css';
import '../../css/m/mkk5gqbne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qu7egmbzc"/><path clip-rule="evenodd" class="hmy4ymk6a"/><path class="mkk5gqbne"/></g>`,
		"fallback": "icon-park-outline:close-wifi",
	});
}

export default Component;
