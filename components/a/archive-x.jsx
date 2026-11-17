import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/b3uffrbyf.css';
import '../../css/i/ikqnel5yv.css';
import '../../css/l/lc5chy50b.css';
import '../../css/k/kn8q3bbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="b3uffrbyf"/><path class="ikqnel5yv"/><path class="lc5chy50b"/><path class="kn8q3bbgl"/></g>`,
		"fallback": "matita:archive-x",
	});
}

export default Component;
