import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ky6edpbsi.css';
import '../../css/i/i6kkc5sfl.css';
import '../../css/w/wcscpib-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ky6edpbsi"/><path class="i6kkc5sfl"/><path class="wcscpib-w"/>`,
		"fallback": "solar:database-bold",
	});
}

export default Component;
