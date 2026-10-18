import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyrr1ab6u.css';
import '../../css/v/vtpfxs3yr.css';
import '../../css/o/oebxy1zud.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyrr1ab6u"/><path class="vtpfxs3yr"/><path class="oebxy1zud"/>`,
		"fallback": "energy-icons:green-bond-20-bold",
	});
}

export default Component;
