import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3mfcsb3n.css';
import '../../css/s/snd_4ib6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3mfcsb3n"/><path class="snd_4ib6h"/>`,
		"fallback": "energy-icons:car-key-48-bold",
	});
}

export default Component;
