import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9cdyobop.css';
import '../../css/g/gzydm7bdl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9cdyobop"/><path class="gzydm7bdl"/>`,
		"fallback": "carbon:angle",
	});
}

export default Component;
