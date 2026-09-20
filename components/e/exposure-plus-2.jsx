import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcxd1c7pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcxd1c7pw"/>`,
		"fallback": "tabler:exposure-plus-2",
	});
}

export default Component;
