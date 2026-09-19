import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyopewbrh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyopewbrh"/>`,
		"fallback": "ion:checkbox-sharp",
	});
}

export default Component;
