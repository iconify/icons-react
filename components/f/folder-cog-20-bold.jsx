import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt8f-3eoh.css';
import '../../css/q/qruqcigga.css';
import '../../css/q/qll7tub0t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt8f-3eoh"/><path class="qruqcigga"/><path class="qll7tub0t"/>`,
		"fallback": "energy-icons:folder-cog-20-bold",
	});
}

export default Component;
