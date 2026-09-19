import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/siav9f5cp.css';
import '../../css/j/jjcws580t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="siav9f5cp"/><path class="jjcws580t"/>`,
		"fallback": "carbon:bot",
	});
}

export default Component;
