import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovc2j_bex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovc2j_bex"/>`,
		"fallback": "tabler:brand-c-sharp",
	});
}

export default Component;
