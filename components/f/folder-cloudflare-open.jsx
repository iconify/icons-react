import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilzbr0e0d.css';
import '../../css/d/d1ok1f99b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilzbr0e0d"/><path class="d1ok1f99b"/>`,
		"fallback": "material-icon-theme:folder-cloudflare-open",
	});
}

export default Component;
