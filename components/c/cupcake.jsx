import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdj0hilva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdj0hilva"/>`,
		"fallback": "vadivam:cupcake",
	});
}

export default Component;
