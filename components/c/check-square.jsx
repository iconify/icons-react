import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkzbi_b2t.css';
import '../../css/k/ki5l85g2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkzbi_b2t"/><path class="ki5l85g2j"/>`,
		"fallback": "uim:check-square",
	});
}

export default Component;
