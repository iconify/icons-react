import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcw1yj9nl.css';
import '../../css/o/okkvq7b7z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcw1yj9nl"/><path class="okkvq7b7z"/>`,
		"fallback": "carbon:cy",
	});
}

export default Component;
