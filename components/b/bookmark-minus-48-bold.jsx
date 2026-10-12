import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c45xl7zgy.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c45xl7zgy"/><path class="hwjgqrbah"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:bookmark-minus-48-bold",
	});
}

export default Component;
