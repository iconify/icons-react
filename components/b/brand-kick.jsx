import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koj8yibyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koj8yibyb"/>`,
		"fallback": "tabler:brand-kick",
	});
}

export default Component;
