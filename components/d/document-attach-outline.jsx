import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0eeupfys.css';
import '../../css/w/ws8a0lt4p.css';
import '../../css/s/sr-_ec-wh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0eeupfys"/><path class="ws8a0lt4p"/><path class="sr-_ec-wh"/>`,
		"fallback": "ion:document-attach-outline",
	});
}

export default Component;
