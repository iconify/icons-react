import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb6i929xq.css';
import '../../css/i/iea0nmbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb6i929xq"/><path class="iea0nmbht"/>`,
		"fallback": "mage:first-aid-kit-fill",
	});
}

export default Component;
