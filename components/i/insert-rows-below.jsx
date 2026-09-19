import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puoohk0xv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puoohk0xv"/>`,
		"fallback": "fluent-mdl2:insert-rows-below",
	});
}

export default Component;
