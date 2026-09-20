import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur4kl4b_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur4kl4b_d"/>`,
		"fallback": "tabler:brand-douban",
	});
}

export default Component;
