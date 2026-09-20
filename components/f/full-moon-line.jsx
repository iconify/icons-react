import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9790znoc.css';
import '../../css/g/ghwi1p49f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9790znoc"/><path class="ghwi1p49f"/>`,
		"fallback": "mingcute:full-moon-line",
	});
}

export default Component;
