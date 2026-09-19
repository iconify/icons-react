import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn3rdabgq.css';
import '../../css/n/nmv6y45kx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="fn3rdabgq"/><path class="nmv6y45kx"/>`,
		"fallback": "famicons:compass-sharp",
	});
}

export default Component;
