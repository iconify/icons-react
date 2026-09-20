import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czrw65imp.css';
import '../../css/l/ly_zznj_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="czrw65imp"/><path class="ly_zznj_x"/>`,
		"fallback": "solar:condicioner-bold",
	});
}

export default Component;
