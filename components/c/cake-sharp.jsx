import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvj6_sntz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvj6_sntz"/>`,
		"fallback": "pixelarticons:cake-sharp",
	});
}

export default Component;
