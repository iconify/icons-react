import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sog4mntqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sog4mntqa"/>`,
		"fallback": "keyline-icons:credit-card-minus-sharp",
	});
}

export default Component;
