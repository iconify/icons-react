import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pykjl9apf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pykjl9apf"/>`,
		"fallback": "glyphs:docs-1",
	});
}

export default Component;
