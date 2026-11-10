import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b5gy8-r_a.css';
import '../../css/a/al3iiq8ht.css';
import '../../css/g/g8vwt0ued.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="b5gy8-r_a"/><path class="al3iiq8ht"/><path class="g8vwt0ued"/></g>`,
		"fallback": "matita:eta-capital",
	});
}

export default Component;
