import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy5ym81zr.css';
import '../../css/z/z8k-y_stg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy5ym81zr"/><path class="z8k-y_stg"/>`,
		"fallback": "carbon:dns-services",
	});
}

export default Component;
