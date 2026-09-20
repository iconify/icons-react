import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2_7wmb7u.css';
import '../../css/w/wdiw5pb9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o2_7wmb7u"/><path class="wdiw5pb9x"/>`,
		"fallback": "selfhst:conduit-open-webui",
	});
}

export default Component;
