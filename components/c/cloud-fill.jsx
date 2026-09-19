import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2c5zztnz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2c5zztnz"/>`,
		"fallback": "f7:cloud-fill",
	});
}

export default Component;
