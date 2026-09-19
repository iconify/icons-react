import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myvwpwmeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myvwpwmeu"/>`,
		"fallback": "heroicons:cog-6-tooth-solid",
	});
}

export default Component;
