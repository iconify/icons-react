import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5nefr4oy.css';
import '../../css/s/s4_kou6zz.css';
import '../../css/u/uyy-03b_b.css';
import '../../css/f/fxfgl_6kl.css';
import '../../css/n/nnrvnlj2z.css';
import '../../css/v/vep2w7bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5nefr4oy"/><path class="s4_kou6zz"/><path class="uyy-03b_b"/><path class="fxfgl_6kl"/><path class="nnrvnlj2z"/><path class="vep2w7bwl"/>`,
		"fallback": "solar:grip-horizontal-bold",
	});
}

export default Component;
