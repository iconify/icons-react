import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szahujb-p.css';
import '../../css/s/sm8tyk6uw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szahujb-p"/><path class="sm8tyk6uw"/>`,
		"fallback": "energy-icons:file-sparkle-20",
	});
}

export default Component;
