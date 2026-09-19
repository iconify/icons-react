import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8xbv753t.css';
import '../../css/q/quur0k0xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8xbv753t"/><path class="quur0k0xi"/>`,
		"fallback": "bx:bxs-file-pdf",
	});
}

export default Component;
