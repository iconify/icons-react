import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5skjynkm.css';
import '../../css/h/h6v6gtwle.css';
import '../../css/t/txlc9qs6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5skjynkm"/><path class="h6v6gtwle"/><path class="txlc9qs6o"/>`,
		"fallback": "selfhst:google-contacts",
	});
}

export default Component;
