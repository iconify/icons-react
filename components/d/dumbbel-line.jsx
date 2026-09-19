import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgtyx9bji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgtyx9bji"/>`,
		"fallback": "icon-park-outline:dumbbel-line",
	});
}

export default Component;
