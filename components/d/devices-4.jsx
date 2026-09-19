import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xusadys6s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xusadys6s"/>`,
		"fallback": "fluent-mdl2:devices-4",
	});
}

export default Component;
