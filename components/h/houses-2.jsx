import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n52k6o0hd.css';
import '../../css/k/k_wh-tamw.css';
import '../../css/m/m-3zhz7pz.css';
import '../../css/j/jrlp85ggr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n52k6o0hd"/><path class="k_wh-tamw"/><path class="m-3zhz7pz"/><path class="jrlp85ggr"/></g>`,
		"fallback": "tdesign:houses-2",
	});
}

export default Component;
