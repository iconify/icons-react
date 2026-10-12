import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx1xifj3g.css';
import '../../css/y/yzu-9rb_k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx1xifj3g"/><path class="yzu-9rb_k"/>`,
		"fallback": "garden:file-pdf-fill-20",
	});
}

export default Component;
