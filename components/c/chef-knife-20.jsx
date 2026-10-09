import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o05ktk5it.css';
import '../../css/p/pya8cs06p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o05ktk5it"/><path class="pya8cs06p"/>`,
		"fallback": "energy-icons:chef-knife-20",
	});
}

export default Component;
