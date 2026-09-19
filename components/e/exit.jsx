import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvgnqf_wk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvgnqf_wk"/>`,
		"fallback": "carbon:exit",
	});
}

export default Component;
