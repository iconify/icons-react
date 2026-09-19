import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp2zq8b7g.css';
import '../../css/e/eziplt3ei.css';
import '../../css/n/ngzn0zb4p.css';
import '../../css/a/agt909hcp.css';
import '../../css/n/n469xpqan.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp2zq8b7g"/><path class="eziplt3ei"/><path class="ngzn0zb4p"/><path class="agt909hcp"/><path class="n469xpqan"/>`,
		"fallback": "carbon:ica-2d",
	});
}

export default Component;
