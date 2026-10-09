import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2s5geiwy.css';
import '../../css/s/s3-5j4bzw.css';
import '../../css/c/clg0t333v.css';
import '../../css/y/yls8p4b8e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2s5geiwy"/><path class="s3-5j4bzw"/><path class="clg0t333v"/><path class="yls8p4b8e"/>`,
		"fallback": "energy-icons:chalet-20-bold",
	});
}

export default Component;
