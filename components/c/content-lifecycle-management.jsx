import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4kg3hb2u.css';
import '../../css/x/x_tu0ab7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4kg3hb2u"/><path class="x_tu0ab7w"/>`,
		"fallback": "eos-icons:content-lifecycle-management",
	});
}

export default Component;
