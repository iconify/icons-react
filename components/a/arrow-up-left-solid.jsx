import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf2lyxber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mf2lyxber"/>`,
		"fallback": "heroicons:arrow-up-left-solid",
	});
}

export default Component;
