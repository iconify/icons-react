import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xizzrhbul.css';
import '../../css/h/h5p4sr09b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xizzrhbul"/><path class="h5p4sr09b"/>`,
		"fallback": "flat-color-icons:down-left",
	});
}

export default Component;
