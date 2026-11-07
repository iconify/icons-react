import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jeubc9bhd.css';
import '../../css/y/ytyjzqb0p.css';
import '../../css/e/exas8ac-h.css';
import '../../css/f/f1r159bxq.css';
import '../../css/u/u85c68klk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jeubc9bhd"/><path class="ytyjzqb0p"/><path class="exas8ac-h"/><path class="f1r159bxq"/><path class="u85c68klk"/>`,
		"fallback": "solar:crown-bold-duotone",
	});
}

export default Component;
