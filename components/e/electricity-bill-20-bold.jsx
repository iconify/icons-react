import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8_piicxj.css';
import '../../css/n/nvkdiwbyk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8_piicxj"/><path class="nvkdiwbyk"/>`,
		"fallback": "energy-icons:electricity-bill-20-bold",
	});
}

export default Component;
