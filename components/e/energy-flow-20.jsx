import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fizh9bcok.css';
import '../../css/b/bi4bqnltf.css';
import '../../css/g/ga2g5dbmp.css';
import '../../css/g/gnp00z80k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fizh9bcok"/><path class="bi4bqnltf"/><path class="ga2g5dbmp"/><path class="gnp00z80k"/>`,
		"fallback": "energy-icons:energy-flow-20",
	});
}

export default Component;
