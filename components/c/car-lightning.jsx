import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n911vvbmz.css';
import '../../css/s/s-5-syhpk.css';
import '../../css/b/b807x5x0j.css';
import '../../css/a/a9dukjbuv.css';
import '../../css/o/o5df-ab4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n911vvbmz"/><path class="s-5-syhpk"/><circle transform="rotate(90 6.99 17.52)" class="b807x5x0j"/><circle transform="rotate(90 16.85 17.52)" class="a9dukjbuv"/><path class="o5df-ab4n"/></g>`,
		"fallback": "andrsrxn:car-lightning",
	});
}

export default Component;
