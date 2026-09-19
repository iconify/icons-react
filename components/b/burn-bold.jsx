import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1kl_f1gs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1kl_f1gs"/>`,
		"fallback": "glyphs:burn-bold",
	});
}

export default Component;
