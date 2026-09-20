import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o08e_obkq.css';
import '../../css/p/pgrcwbbij.css';
import '../../css/i/i6g2rfvcc.css';
import '../../css/t/tu6eh3b_x.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o08e_obkq"/><path class="pgrcwbbij"/><path class="i6g2rfvcc"/><path class="tu6eh3b_x"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-pencil:angle-up-circle",
	});
}

export default Component;
