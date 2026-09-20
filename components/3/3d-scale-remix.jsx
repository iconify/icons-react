import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7rwwgb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w7rwwgb0p"/>`,
		"fallback": "streamline-sharp:3d-scale-remix",
	});
}

export default Component;
