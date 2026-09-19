import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xndgo8bxx.css';
import '../../css/d/dj23tuv2h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xndgo8bxx"/><path class="dj23tuv2h"/>`,
		"fallback": "devicon:gnuradio-wordmark",
	});
}

export default Component;
