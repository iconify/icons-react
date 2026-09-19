import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asn7ozbgq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asn7ozbgq"/>`,
		"fallback": "fluent-mdl2:arrow-down-right-8",
	});
}

export default Component;
