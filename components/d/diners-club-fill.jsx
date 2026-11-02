import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu9ubbblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu9ubbblc"/>`,
		"fallback": "mingcute:diners-club-fill",
	});
}

export default Component;
