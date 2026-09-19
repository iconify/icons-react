import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3z5zt1uy.css';
import '../../css/w/w-djd2bch.css';
import '../../css/h/hzwnhbblq.css';
import '../../css/r/rzzabbb-h.css';
import '../../css/s/s7k-snbit.css';
import '../../css/b/bkd_-ivin.css';
import '../../css/o/owpeu2bzo.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3z5zt1uy"/><path class="w-djd2bch"/><path class="hzwnhbblq"/><path class="rzzabbb-h"/><path class="s7k-snbit"/><path class="bkd_-ivin"/><path class="owpeu2bzo"/>`,
		"fallback": "fxemoji:dancer",
	});
}

export default Component;
