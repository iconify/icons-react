import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihjjzqbmv.css';
import '../../css/g/genqd_b4v.css';
import '../../css/l/l9-rks3yu.css';
import '../../css/s/s5w1uzlwi.css';
import '../../css/g/ghpw9iy0v.css';
import '../../css/p/p-9u5ouvy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ihjjzqbmv"/><path clip-rule="evenodd" class="genqd_b4v"/><path class="l9-rks3yu"/><path clip-rule="evenodd" class="s5w1uzlwi"/><path clip-rule="evenodd" class="ghpw9iy0v"/><path class="p-9u5ouvy"/></g>`,
		"fallback": "glyphs:clock-fast-outline",
	});
}

export default Component;
