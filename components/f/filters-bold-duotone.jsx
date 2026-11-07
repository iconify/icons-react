import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t283ehz.css';
import '../../css/l/l975lbcph.css';
import '../../css/m/m86cqj3me.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2t283ehz"/><path class="l975lbcph"/><path class="m86cqj3me"/>`,
		"fallback": "solar:filters-bold-duotone",
	});
}

export default Component;
