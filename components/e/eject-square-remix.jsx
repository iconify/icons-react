import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq_8xzbaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gq_8xzbaw"/>`,
		"fallback": "streamline-sharp:eject-square-remix",
	});
}

export default Component;
