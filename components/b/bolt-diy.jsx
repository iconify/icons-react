import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmnb66mry.css';
import '../../css/z/z46nhhf2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmnb66mry"/><path class="z46nhhf2y"/>`,
		"fallback": "selfhst:bolt-diy",
	});
}

export default Component;
