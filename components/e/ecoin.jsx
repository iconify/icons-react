import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7gzr4wdh.css';
import '../../css/w/w-1bkb7vd.css';
import '../../css/w/w22a27rwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g7gzr4wdh"/><path class="w-1bkb7vd"/><path class="w22a27rwn"/>`,
		"fallback": "token:ecoin",
	});
}

export default Component;
