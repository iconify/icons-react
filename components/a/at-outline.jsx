import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss_nhe6tp.css';
import '../../css/t/trav0txtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss_nhe6tp"/><path class="trav0txtl"/>`,
		"fallback": "cuida:at-outline",
	});
}

export default Component;
