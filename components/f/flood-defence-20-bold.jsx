import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/howz77bms.css';
import '../../css/i/i1ggakb8s.css';
import '../../css/e/e31pz4epa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="howz77bms"/><path class="i1ggakb8s"/><path class="e31pz4epa"/>`,
		"fallback": "energy-icons:flood-defence-20-bold",
	});
}

export default Component;
