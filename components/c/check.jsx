import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb0vhebiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb0vhebiq"/>`,
		"fallback": "vadivam:check",
	});
}

export default Component;
