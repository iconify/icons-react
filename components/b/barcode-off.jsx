import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xodp15i4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xodp15i4o"/>`,
		"fallback": "tabler:barcode-off",
	});
}

export default Component;
