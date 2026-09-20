import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syi5fcbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="syi5fcbki"/>`,
		"fallback": "streamline-sharp:feather-pen-solid",
	});
}

export default Component;
