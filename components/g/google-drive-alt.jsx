import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9ot2f44q.css';
import '../../css/i/it9p5abzo.css';
import '../../css/n/n0frhibvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9ot2f44q"/><path class="it9p5abzo"/><path class="n0frhibvz"/>`,
		"fallback": "uim:google-drive-alt",
	});
}

export default Component;
