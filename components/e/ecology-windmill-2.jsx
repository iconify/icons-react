import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0j7exohw.css';
import '../../css/z/zpv0rcqaw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0j7exohw"/><path class="zpv0rcqaw"/>`,
		"fallback": "streamline-pixel:ecology-windmill-2",
	});
}

export default Component;
