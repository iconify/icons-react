import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1pz1vb_r.css';
import '../../css/t/ta3buzrzl.css';
import '../../css/n/np48uqbyl.css';
import '../../css/s/sd5g5m95o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1pz1vb_r"/><path class="ta3buzrzl"/><path class="np48uqbyl"/><path class="sd5g5m95o"/>`,
		"fallback": "energy-icons:fertiliser-48-bold",
	});
}

export default Component;
