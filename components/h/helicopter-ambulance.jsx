import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvjqu111s.css';
import '../../css/g/g91n7nble.css';
import '../../css/h/h6_9nma6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvjqu111s"/><path class="g91n7nble"/><path class="h6_9nma6v"/>`,
		"fallback": "fontisto:helicopter-ambulance",
	});
}

export default Component;
