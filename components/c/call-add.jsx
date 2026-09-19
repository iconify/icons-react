import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbuc_wbgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbuc_wbgx"/>`,
		"fallback": "hugeicons:call-add",
	});
}

export default Component;
