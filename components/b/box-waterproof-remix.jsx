import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmlo9qb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fmlo9qb5i"/>`,
		"fallback": "streamline-sharp:box-waterproof-remix",
	});
}

export default Component;
