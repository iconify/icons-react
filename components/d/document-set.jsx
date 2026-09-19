import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw2n_kb8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw2n_kb8m"/>`,
		"fallback": "carbon:document-set",
	});
}

export default Component;
