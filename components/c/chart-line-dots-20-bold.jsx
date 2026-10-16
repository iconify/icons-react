import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/y/y5lz0kbah.css';
import '../../css/m/mv7ibobfu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="y5lz0kbah"/><path class="mv7ibobfu"/>`,
		"fallback": "energy-icons:chart-line-dots-20-bold",
	});
}

export default Component;
