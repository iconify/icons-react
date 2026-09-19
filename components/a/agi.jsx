import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d49fq3bfw.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/t/tnzfzpi4d.css';
import '../../css/t/tzj4vqbyx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="d49fq3bfw"/><g class="n1mjunbsu"><path class="tnzfzpi4d"/><path class="tzj4vqbyx"/></g></g>`,
		"fallback": "cryptocurrency-color:agi",
	});
}

export default Component;
