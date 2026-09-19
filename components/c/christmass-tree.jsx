import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pt-miowbi.css';
import '../../css/j/jtwtuabvq.css';
import '../../css/s/s12yr9pzl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pt-miowbi"/><path class="jtwtuabvq"/><path class="s12yr9pzl"/></g>`,
		"fallback": "si-glyph:christmass-tree",
	});
}

export default Component;
