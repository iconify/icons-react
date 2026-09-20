import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yaoj75bir.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/je0c3ho1m.css';
import '../../css/c/ca9qziunz.css';
import '../../css/k/kjbro8bqb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yaoj75bir"/><g class="jn8qy4bru"><path class="je0c3ho1m"/><path class="ca9qziunz"/><path class="kjbro8bqb"/></g>`,
		"fallback": "openmoji:index-pointing-at-the-viewer-dark-skin-tone",
	});
}

export default Component;
