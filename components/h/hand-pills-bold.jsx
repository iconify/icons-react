import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrw-l5b1k.css';
import '../../css/o/osatibboq.css';
import '../../css/o/ooq4xdh-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrw-l5b1k"/><path class="osatibboq"/><path class="ooq4xdh-c"/>`,
		"fallback": "solar:hand-pills-bold",
	});
}

export default Component;
