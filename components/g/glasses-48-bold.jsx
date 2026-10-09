import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bojscnbzb.css';
import '../../css/u/uj137zbil.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bojscnbzb"/><path class="uj137zbil"/>`,
		"fallback": "energy-icons:glasses-48-bold",
	});
}

export default Component;
