import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmkjt401p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmkjt401p"/>`,
		"fallback": "icon-park-outline:great-wall",
	});
}

export default Component;
