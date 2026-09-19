import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gj7t04z_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gj7t04z_s"/>`,
		"fallback": "dashicons:amazon",
	});
}

export default Component;
