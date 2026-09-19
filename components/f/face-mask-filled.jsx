import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5ej4pbho.css';
import '../../css/c/c6etmkbzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5ej4pbho"/><path class="c6etmkbzp"/>`,
		"fallback": "boxicons:face-mask-filled",
	});
}

export default Component;
