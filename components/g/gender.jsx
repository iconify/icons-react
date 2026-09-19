import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zovwi_bqz.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zovwi_bqz"/>`,
		"fallback": "whh:gender",
	});
}

export default Component;
