import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltoq1dbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltoq1dbzx"/>`,
		"fallback": "tabler:brand-open-source-filled",
	});
}

export default Component;
