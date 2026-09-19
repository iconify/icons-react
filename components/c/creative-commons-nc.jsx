import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xab7rh38v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xab7rh38v"/>`,
		"fallback": "cib:creative-commons-nc",
	});
}

export default Component;
