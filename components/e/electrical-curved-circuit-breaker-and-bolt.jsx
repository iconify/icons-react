import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2c56nb3p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2c56nb3p"/>`,
		"fallback": "pinhead:electrical-curved-circuit-breaker-and-bolt",
	});
}

export default Component;
