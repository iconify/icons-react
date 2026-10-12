import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjria_brj.css';
import '../../css/t/tu3mrmh2h.css';
import '../../css/a/a9hgkzbuy.css';
import '../../css/w/w76mjcc4o.css';
import '../../css/c/cy839_p9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="wjria_brj"/><rect class="tu3mrmh2h"/><rect class="a9hgkzbuy"/><rect class="w76mjcc4o"/><path class="cy839_p9b"/></g>`,
		"fallback": "andrsrxn:align-top",
	});
}

export default Component;
