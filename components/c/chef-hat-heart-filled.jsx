import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tfegwvzcm.css';
import '../../css/i/itm5p9b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tfegwvzcm"/><path class="itm5p9b1u"/></g>`,
		"fallback": "reicon:chef-hat-heart-filled",
	});
}

export default Component;
