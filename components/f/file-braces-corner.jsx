import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z7nmpmbvj.css';
import '../../css/f/f05pcbspf.css';
import '../../css/i/i8nh24b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z7nmpmbvj"/><path class="f05pcbspf"/><path class="i8nh24b2r"/></g>`,
		"fallback": "hugeicons:file-braces-corner",
	});
}

export default Component;
