import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcnly3b_c.css';
import '../../css/g/gtz84wbsv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcnly3b_c"/><path class="gtz84wbsv"/>`,
		"fallback": "selfhst:dji-logbook",
	});
}

export default Component;
