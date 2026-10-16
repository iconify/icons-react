import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_2osyyfp.css';
import '../../css/l/lyxku8b_i.css';
import '../../css/x/x1-hkebth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_2osyyfp"/><path class="lyxku8b_i"/><path class="x1-hkebth"/>`,
		"fallback": "energy-icons:cctv-48-bold",
	});
}

export default Component;
