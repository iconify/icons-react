import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgrkbtbto.css';
import '../../css/b/bdumtbccb.css';
import '../../css/d/de-emhyyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgrkbtbto"/><path class="bdumtbccb"/><path class="de-emhyyt"/>`,
		"fallback": "eos-icons:background-tasks",
	});
}

export default Component;
