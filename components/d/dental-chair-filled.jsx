import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtlbrsb9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtlbrsb9b"/>`,
		"fallback": "griddy-icons:dental-chair-filled",
	});
}

export default Component;
