import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8hwotsgc.css';
import '../../css/v/v6q00pbel.css';
import '../../css/v/vhr7liyye.css';
import '../../css/i/iln4g2p0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x8hwotsgc"/><path class="v6q00pbel"/><path class="vhr7liyye"/><path class="iln4g2p0d"/></g>`,
		"fallback": "andrsrxn:baby-bottle",
	});
}

export default Component;
