import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq1o3oben.css';
import '../../css/q/qzsos-3ny.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq1o3oben"/><path class="qzsos-3ny"/>`,
		"fallback": "entypo-social:evernote",
	});
}

export default Component;
