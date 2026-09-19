import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsr0t4_oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsr0t4_oa"/>`,
		"fallback": "cbi:crunchyrol",
	});
}

export default Component;
