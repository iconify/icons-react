import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdd35gb_v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdd35gb_v"/>`,
		"fallback": "glyphs:fog",
	});
}

export default Component;
