import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn9frpc1e.css';
import '../../css/o/ocxedjb1h.css';
import '../../css/i/i6107pbis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn9frpc1e"/><path class="ocxedjb1h"/><path class="i6107pbis"/>`,
		"fallback": "stash:image-minus",
	});
}

export default Component;
