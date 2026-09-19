import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6boze_eq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l6boze_eq"/>`,
		"fallback": "griddy-icons:body-flexibility",
	});
}

export default Component;
