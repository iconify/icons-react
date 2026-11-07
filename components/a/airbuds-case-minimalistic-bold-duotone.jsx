import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z58cvdbyi.css';
import '../../css/z/zy_e48yuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z58cvdbyi"/><path class="zy_e48yuc"/>`,
		"fallback": "solar:airbuds-case-minimalistic-bold-duotone",
	});
}

export default Component;
