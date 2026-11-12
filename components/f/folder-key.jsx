import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbc6i7byb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbc6i7byb"/>`,
		"fallback": "tabler:folder-key",
	});
}

export default Component;
