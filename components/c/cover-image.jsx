import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgbu0syiq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgbu0syiq"/>`,
		"fallback": "dashicons:cover-image",
	});
}

export default Component;
