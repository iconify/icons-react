import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zai6jq-xz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zai6jq-xz"/>`,
		"fallback": "noviair:gift",
	});
}

export default Component;
