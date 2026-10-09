import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4pa64bjg.css';
import '../../css/b/banax9p2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4pa64bjg"/><path class="banax9p2s"/>`,
		"fallback": "energy-icons:bread-20",
	});
}

export default Component;
