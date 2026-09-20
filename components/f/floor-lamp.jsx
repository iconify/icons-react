import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzned5b2u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzned5b2u"/>`,
		"fallback": "pinhead:floor-lamp",
	});
}

export default Component;
