import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwb06vbre.css';

const viewBox = {"width":484,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st1 xwb06vbre"/>`,
		"fallback": "academicons:conversation",
	});
}

export default Component;
