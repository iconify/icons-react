import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2-leshc.css';
import '../../css/k/kg2uyccfb.css';
import '../../css/y/y1nytpm2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2-leshc"/><path class="kg2uyccfb"/><path class="y1nytpm2s"/>`,
		"fallback": "uim:anchor",
	});
}

export default Component;
