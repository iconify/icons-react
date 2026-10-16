import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umn48nmev.css';
import '../../css/o/oz88olb9k.css';
import '../../css/k/kc2kqxrec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umn48nmev"/><path class="oz88olb9k"/><path class="kc2kqxrec"/>`,
		"fallback": "energy-icons:compressor-48-bold",
	});
}

export default Component;
