import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itet59rhp.css';
import '../../css/k/kdn9gsbyn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itet59rhp"/><path class="kdn9gsbyn"/>`,
		"fallback": "solar:bone-broken-bold-duotone",
	});
}

export default Component;
