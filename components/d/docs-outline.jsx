import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1bbndrsh.css';
import '../../css/u/ullp8vaok.css';
import '../../css/n/nx2c618gt.css';
import '../../css/d/douhlrken.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j1bbndrsh"><path class="ullp8vaok"/><path class="nx2c618gt"/><path class="douhlrken"/></g>`,
		"fallback": "glyphs:docs-outline",
	});
}

export default Component;
