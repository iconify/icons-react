import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pf1ohtq-j.css';
import '../../css/t/tv_kswb8i.css';
import '../../css/b/b536a6bsc.css';
import '../../css/a/a3t_5yinj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pf1ohtq-j"/><path class="tv_kswb8i"/><path class="b536a6bsc"/><path class="a3t_5yinj"/></g>`,
		"fallback": "glyphs:house-water-bold",
	});
}

export default Component;
