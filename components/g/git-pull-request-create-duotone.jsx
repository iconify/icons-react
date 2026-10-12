import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h54h6zbmm.css';
import '../../css/o/ob4kuqbkv.css';
import '../../css/u/uuz9mz48k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h54h6zbmm"/><path class="ob4kuqbkv"/><path class="uuz9mz48k"/></g>`,
		"fallback": "lucide-extended:git-pull-request-create-duotone",
	});
}

export default Component;
