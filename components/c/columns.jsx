import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmj2u9wvy.css';
import '../../css/e/e729k1bor.css';
import '../../css/e/e7k_nubxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmj2u9wvy"/><path class="e729k1bor"/><path class="e7k_nubxd"/>`,
		"fallback": "uim:columns",
	});
}

export default Component;
