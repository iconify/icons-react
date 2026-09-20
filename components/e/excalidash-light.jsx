import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l6dc3oyze.css';
import '../../css/t/tr0pmhbxp.css';
import '../../css/j/j62hkpo5s.css';
import '../../css/i/i9wuo-33s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l6dc3oyze"/><path class="tr0pmhbxp"/><path class="j62hkpo5s"/><path class="i9wuo-33s"/>`,
		"fallback": "selfhst:excalidash-light",
	});
}

export default Component;
