import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olhorlhrj.css';
import '../../css/k/k_zqql6xy.css';
import '../../css/n/nhcbp3bdb.css';
import '../../css/d/d8qet0omc.css';
import '../../css/x/xig01du4t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olhorlhrj"/><path class="k_zqql6xy"/><path class="nhcbp3bdb"/><path class="d8qet0omc"/><path class="xig01du4t"/>`,
		"fallback": "selfhst:ente-photos",
	});
}

export default Component;
