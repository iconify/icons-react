import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmsctmb7o.css';
import '../../css/z/z4pw7mbwo.css';
import '../../css/j/j42_cub7o.css';
import '../../css/u/uji50pb4n.css';
import '../../css/t/t5w_olbtz.css';
import '../../css/b/bisfjsret.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmsctmb7o"/><path class="z4pw7mbwo"/><path class="j42_cub7o"/><path class="uji50pb4n"/><path class="t5w_olbtz"/><path class="bisfjsret"/></g>`,
		"fallback": "glyphs:album-outline",
	});
}

export default Component;
