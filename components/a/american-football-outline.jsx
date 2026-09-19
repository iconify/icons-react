import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4asfxowo.css';
import '../../css/x/xqkp-ixqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse transform="rotate(-45 256 256.002)" class="p4asfxowo"/><path class="xqkp-ixqi"/>`,
		"fallback": "famicons:american-football-outline",
	});
}

export default Component;
