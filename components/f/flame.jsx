import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa_l6hbaj.css';
import '../../css/m/mylxy3b_v.css';
import '../../css/d/d8znebcca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k xa_l6hbaj"/><path class="mylxy3b_v wm-k"/><path class="d8znebcca wm-a"/>`,
		"fallback": "withicons-bauhaus:flame",
	});
}

export default Component;
