import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgi2v4blc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgi2v4blc"/>`,
		"fallback": "glyphs:hand-holding-seedling",
	});
}

export default Component;
