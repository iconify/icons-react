import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kphzszbjy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kphzszbjy"/>`,
		"fallback": "glyphs:bolt-1",
	});
}

export default Component;
