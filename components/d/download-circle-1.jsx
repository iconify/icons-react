import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxm40qhvn.css';
import '../../css/a/alf2ikb1h.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxm40qhvn"/><path clip-rule="evenodd" class="alf2ikb1h"/>`,
		"fallback": "lineicons:download-circle-1",
	});
}

export default Component;
