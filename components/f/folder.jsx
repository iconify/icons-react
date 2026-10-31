import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/c/cdj5e1p9p.css';
import '../../css/a/a2047_bez.css';
import '../../css/g/gn0coqbmw.css';
import '../../css/q/q8995_brv.css';
import '../../css/m/m7w811sll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="cdj5e1p9p"/><path class="a2047_bez"/><path class="gn0coqbmw"/><path class="q8995_brv"/><path class="m7w811sll"/></g>`,
		"fallback": "withicons-retro:folder",
	});
}

export default Component;
