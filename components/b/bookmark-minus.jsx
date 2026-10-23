import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdv3zhb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdv3zhb8w"/>`,
		"fallback": "vadivam:bookmark-minus",
	});
}

export default Component;
