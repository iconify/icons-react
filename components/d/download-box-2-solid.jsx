import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw_ax30_o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zw_ax30_o"/>`,
		"fallback": "streamline-plump:download-box-2-solid",
	});
}

export default Component;
