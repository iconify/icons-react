import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8zpfcn6o.css';
import '../../css/u/umo6mlbcr.css';
import '../../css/n/n_y009b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8zpfcn6o"/><path class="umo6mlbcr"/><path class="n_y009b4d"/>`,
		"fallback": "withicons-bauhaus:files",
	});
}

export default Component;
