import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l377ax9ox.css';
import '../../css/e/elc9xubaq.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l377ax9ox"/><path class="elc9xubaq"/>`,
		"fallback": "maki:globe-11",
	});
}

export default Component;
