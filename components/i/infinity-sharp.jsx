import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4r97vg-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4r97vg-b"/>`,
		"fallback": "pixelarticons:infinity-sharp",
	});
}

export default Component;
