import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/povo_89as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="povo_89as"/>`,
		"fallback": "tabler:brand-tinder",
	});
}

export default Component;
