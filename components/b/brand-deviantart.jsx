import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhac42-nv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhac42-nv"/>`,
		"fallback": "tabler:brand-deviantart",
	});
}

export default Component;
