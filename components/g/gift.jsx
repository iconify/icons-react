import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrucu7bhc.css';

const viewBox = {"width":1536,"height":1344};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrucu7bhc"/>`,
		"fallback": "fa:gift",
	});
}

export default Component;
