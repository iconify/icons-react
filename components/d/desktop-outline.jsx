import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv703tnxb.css';
import '../../css/o/o7jqpib-k.css';
import '../../css/o/oly_7o-mp.css';
import '../../css/p/pmq70fbpo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="vv703tnxb"/><path class="o7jqpib-k"/><path class="oly_7o-mp"/><path class="pmq70fbpo"/>`,
		"fallback": "famicons:desktop-outline",
	});
}

export default Component;
