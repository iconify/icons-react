import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k2dbzyb_r.css';
import '../../css/b/bcbxkzjns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="k2dbzyb_r"/><path class="bcbxkzjns"/></g>`,
		"fallback": "streamline-sharp-color:allergens-fish-flat",
	});
}

export default Component;
