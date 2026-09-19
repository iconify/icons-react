import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqov3yajq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqov3yajq"/>`,
		"fallback": "icon-park-outline:auto-width",
	});
}

export default Component;
