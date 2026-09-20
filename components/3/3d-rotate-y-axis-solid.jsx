import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqbqm-bid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pqbqm-bid"/>`,
		"fallback": "streamline-sharp:3d-rotate-y-axis-solid",
	});
}

export default Component;
