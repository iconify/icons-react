import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sei1hna7r.css';
import '../../css/b/b2of3ebrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sei1hna7r"/><path class="b2of3ebrg"/>`,
		"fallback": "bxl:algolia",
	});
}

export default Component;
