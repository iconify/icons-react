import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1t51900q.css';
import '../../css/y/y_57knbko.css';
import '../../css/f/fhvic0mtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v1t51900q"/><path class="y_57knbko"/><path class="fhvic0mtv"/></g>`,
		"fallback": "lucide-extended:archive-x-duotone",
	});
}

export default Component;
