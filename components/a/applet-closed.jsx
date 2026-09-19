import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq7uf_biq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq7uf_biq"/>`,
		"fallback": "icon-park-outline:applet-closed",
	});
}

export default Component;
