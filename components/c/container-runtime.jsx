import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxlaslbqv.css';
import '../../css/z/zne6o-9jy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxlaslbqv"/><path class="zne6o-9jy"/>`,
		"fallback": "carbon:container-runtime",
	});
}

export default Component;
