import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uz7hc13zd.css';
import '../../css/n/nc_7k1bfr.css';
import '../../css/l/lx8143b6z.css';
import '../../css/s/s5etl5b8s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uz7hc13zd"/><path class="nc_7k1bfr"/><path class="lx8143b6z"/><path class="s5etl5b8s"/></g>`,
		"fallback": "glyphs:dslr",
	});
}

export default Component;
