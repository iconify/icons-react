import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm-t92b-g.css';
import '../../css/s/s-ndftb7o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm-t92b-g"/><path class="s-ndftb7o"/>`,
		"fallback": "energy-icons:heated-towel-rail-48",
	});
}

export default Component;
