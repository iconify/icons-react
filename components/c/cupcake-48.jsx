import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_lg07b5j.css';
import '../../css/m/mq-hp4bft.css';
import '../../css/j/jw7uenmxd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_lg07b5j"/><path class="mq-hp4bft"/><path class="jw7uenmxd"/>`,
		"fallback": "energy-icons:cupcake-48",
	});
}

export default Component;
