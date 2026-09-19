import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1si9h-km.css';
import '../../css/b/buc-_ybgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1si9h-km"/><circle class="buc-_ybgy"/>`,
		"fallback": "bx:bxs-file-find",
	});
}

export default Component;
