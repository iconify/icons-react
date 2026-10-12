import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9gaorbey.css';
import '../../css/o/oqdy_ubyq.css';
import '../../css/h/h54h6zbmm.css';
import '../../css/o/ob4kuqbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9gaorbey"/><path class="oqdy_ubyq"/><path class="h54h6zbmm"/><path class="ob4kuqbkv"/></g>`,
		"fallback": "lucide-extended:git-pull-request-closed-duotone",
	});
}

export default Component;
