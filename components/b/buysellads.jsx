import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7u71eztt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7u71eztt"/>`,
		"fallback": "cib:buysellads",
	});
}

export default Component;
