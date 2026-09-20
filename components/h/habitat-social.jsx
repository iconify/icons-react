import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfqm7soid.css';
import '../../css/b/bdvisdbqa.css';
import '../../css/d/dg056mb7w.css';
import '../../css/n/ny0pa7b_z.css';
import '../../css/j/judwtlb-z.css';
import '../../css/p/p8ekenbjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfqm7soid"/><path class="bdvisdbqa"/><path class="dg056mb7w"/><path class="ny0pa7b_z"/><path class="judwtlb-z"/><path class="p8ekenbjc"/>`,
		"fallback": "selfhst:habitat-social",
	});
}

export default Component;
