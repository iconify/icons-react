import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxoym-ovg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxoym-ovg"/>`,
		"fallback": "dinkie-icons:bell-with-cancellation-stroke",
	});
}

export default Component;
