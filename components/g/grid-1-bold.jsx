import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsh9rtrrg.css';
import '../../css/b/bcu5qv4na.css';
import '../../css/a/a19po3bjs.css';
import '../../css/i/indg42tsb.css';
import '../../css/p/p97j_h87d.css';
import '../../css/a/a8ac7rohe.css';
import '../../css/k/krh365bnp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tsh9rtrrg"><rect class="bcu5qv4na"/><rect class="a19po3bjs"/><rect class="indg42tsb"/><rect class="p97j_h87d"/><rect class="a8ac7rohe"/><rect class="krh365bnp"/></g>`,
		"fallback": "glyphs:grid-1-bold",
	});
}

export default Component;
