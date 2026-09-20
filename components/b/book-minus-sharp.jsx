import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zi94aubdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zi94aubdz"/>`,
		"fallback": "keyline-icons:book-minus-sharp",
	});
}

export default Component;
