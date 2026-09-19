import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm6zm16-t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm6zm16-t"/>`,
		"fallback": "icon-park-solid:align-top-two",
	});
}

export default Component;
