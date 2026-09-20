import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7tu5e_1v.css';
import '../../css/k/kesyiabml.css';
import '../../css/p/p9m0wgbmb.css';
import '../../css/b/b5rjm52mb.css';
import '../../css/f/fq4_qkb3m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7tu5e_1v"/><path class="kesyiabml"/><path class="p9m0wgbmb"/><path class="b5rjm52mb"/><path class="fq4_qkb3m"/>`,
		"fallback": "openmoji:growing-heart",
	});
}

export default Component;
