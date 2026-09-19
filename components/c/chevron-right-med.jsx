import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7u18irpl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7u18irpl"/>`,
		"fallback": "fluent-mdl2:chevron-right-med",
	});
}

export default Component;
