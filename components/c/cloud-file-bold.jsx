import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh4v0zw4o.css';
import '../../css/a/a82paub2z.css';
import '../../css/o/ok1wrcikb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh4v0zw4o"/><path class="a82paub2z"/><path class="ok1wrcikb"/>`,
		"fallback": "streamline-ultimate:cloud-file-bold",
	});
}

export default Component;
