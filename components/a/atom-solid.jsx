import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mtg81v63p.css';
import '../../css/j/jgcif9d1i.css';
import '../../css/t/txeflkg9t.css';
import '../../css/l/l-ujagxqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mtg81v63p"/><path class="jgcif9d1i"/><path clip-rule="evenodd" class="txeflkg9t"/><path class="l-ujagxqd"/></g>`,
		"fallback": "flowbite:atom-solid",
	});
}

export default Component;
