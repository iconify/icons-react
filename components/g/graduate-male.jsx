import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpgfzqb3v.css';
import '../../css/o/os6w96bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kpgfzqb3v"/><path class="os6w96bgm"/></g>`,
		"fallback": "hugeicons:graduate-male",
	});
}

export default Component;
