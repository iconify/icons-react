import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/euxpybc-u.css';
import '../../css/o/oqdy_ubyq.css';
import '../../css/h/h54h6zbmm.css';
import '../../css/o/ob4kuqbkv.css';
import '../../css/j/jazzlcvhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="euxpybc-u"/><path class="oqdy_ubyq"/><path class="h54h6zbmm"/><path class="ob4kuqbkv"/><path class="jazzlcvhp"/></g>`,
		"fallback": "lucide-extended:git-merge-duotone",
	});
}

export default Component;
