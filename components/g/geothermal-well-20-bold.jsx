import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5xztqbch.css';
import '../../css/o/orxho49no.css';
import '../../css/k/kfbs23bbk.css';
import '../../css/r/rdzvzrz1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5xztqbch"/><path class="orxho49no"/><path class="kfbs23bbk"/><path class="rdzvzrz1f"/>`,
		"fallback": "energy-icons:geothermal-well-20-bold",
	});
}

export default Component;
