import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjnu8mbcv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjnu8mbcv"/>`,
		"fallback": "carbon:change-circle",
	});
}

export default Component;
