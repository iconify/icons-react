import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk21kvbqk.css';
import '../../css/u/ume25pisr.css';
import '../../css/n/n1tzarbax.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk21kvbqk"/><path class="ume25pisr"/><path class="n1tzarbax"/>`,
		"fallback": "energy-icons:delete-48-bold",
	});
}

export default Component;
