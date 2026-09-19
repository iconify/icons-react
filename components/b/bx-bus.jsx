import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubq-_mz2b.css';
import '../../css/s/sbqm2wbdh.css';
import '../../css/e/eh56eccoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubq-_mz2b"/><circle class="sbqm2wbdh"/><circle class="eh56eccoo"/>`,
		"fallback": "bx:bx-bus",
	});
}

export default Component;
