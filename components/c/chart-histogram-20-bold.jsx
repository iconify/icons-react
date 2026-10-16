import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/k/kk93h00zz.css';
import '../../css/g/gdnaw35gw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="kk93h00zz"/><path class="gdnaw35gw"/>`,
		"fallback": "energy-icons:chart-histogram-20-bold",
	});
}

export default Component;
