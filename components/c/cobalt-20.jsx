import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0ii7tboz.css';
import '../../css/e/elo702b0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0ii7tboz"/><path class="elo702b0c"/>`,
		"fallback": "energy-icons:cobalt-20",
	});
}

export default Component;
