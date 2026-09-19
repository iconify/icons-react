import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vf28uwb-j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vf28uwb-j"/>`,
		"fallback": "icon-park-outline:download-one",
	});
}

export default Component;
