import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb-4crb9y.css';
import '../../css/g/gydy3ndrg.css';
import '../../css/r/re_l3eb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb-4crb9y"/><path class="gydy3ndrg"/><path clip-rule="evenodd" class="re_l3eb8a"/>`,
		"fallback": "solar:flip-vertical-bold",
	});
}

export default Component;
