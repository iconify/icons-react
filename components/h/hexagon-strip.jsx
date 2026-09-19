import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs_kw9bbz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs_kw9bbz"/>`,
		"fallback": "icon-park:hexagon-strip",
	});
}

export default Component;
