import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fojtamjbu.css';
import '../../css/q/qa1kzxbna.css';
import '../../css/b/bhgrkj_yw.css';
import '../../css/u/ui3jx7x5l.css';
import '../../css/u/uczgi2b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fojtamjbu"/><path class="qa1kzxbna"/><path class="bhgrkj_yw"/><path class="ui3jx7x5l"/><path class="uczgi2b2s"/></g>`,
		"fallback": "andrsrxn:cloud-sun",
	});
}

export default Component;
