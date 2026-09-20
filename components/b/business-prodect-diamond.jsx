import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5p02fbjy.css';
import '../../css/p/p_qjcl89l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5p02fbjy"/><path class="p_qjcl89l"/>`,
		"fallback": "streamline-pixel:business-prodect-diamond",
	});
}

export default Component;
