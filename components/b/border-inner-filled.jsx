import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxo__5f1j.css';
import '../../css/u/uq4zqzbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxo__5f1j"/><path class="uq4zqzbch"/>`,
		"fallback": "boxicons:border-inner-filled",
	});
}

export default Component;
