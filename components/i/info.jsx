import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgs1axbkw.css';
import '../../css/f/f3yq4bbos.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgs1axbkw"/><path class="f3yq4bbos"/>`,
		"fallback": "ooui:info",
	});
}

export default Component;
