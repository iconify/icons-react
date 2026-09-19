import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvziljb5x.css';
import '../../css/s/sx6wue_0b.css';
import '../../css/a/a37x_vbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvziljb5x"/><path class="sx6wue_0b"/><path class="a37x_vbgg"/>`,
		"fallback": "bxl:discover",
	});
}

export default Component;
