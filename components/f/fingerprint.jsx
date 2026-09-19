import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpp8mpb8p.css';
import '../../css/r/rg45w14ll.css';
import '../../css/v/vi504dbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpp8mpb8p"/><path class="rg45w14ll"/><path class="vi504dbkq"/>`,
		"fallback": "boxicons:fingerprint",
	});
}

export default Component;
