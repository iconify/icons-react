import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwc2mnb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwc2mnb2q"/>`,
		"fallback": "vadivam:bluetooth-off",
	});
}

export default Component;
