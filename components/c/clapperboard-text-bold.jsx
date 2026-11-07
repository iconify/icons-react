import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0d2howua.css';
import '../../css/v/vmiwmz8tp.css';
import '../../css/g/glyc0obms.css';
import '../../css/f/fmncdibdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0d2howua"/><path class="vmiwmz8tp"/><path clip-rule="evenodd" class="glyc0obms"/><path class="fmncdibdr"/>`,
		"fallback": "solar:clapperboard-text-bold",
	});
}

export default Component;
