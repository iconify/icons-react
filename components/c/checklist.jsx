import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld_v0xb7a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld_v0xb7a"/>`,
		"fallback": "picon:checklist",
	});
}

export default Component;
