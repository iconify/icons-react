import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/akztulxao.css';
import '../../css/i/ie61plbol.css';
import '../../css/c/cma6q9u3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="akztulxao"/><path class="ie61plbol"/><path class="cma6q9u3t"/></g>`,
		"fallback": "matita:gauge",
	});
}

export default Component;
