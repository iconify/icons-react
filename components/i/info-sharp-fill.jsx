import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deb0atb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deb0atb5f"/>`,
		"fallback": "keyline-icons:info-sharp-fill",
	});
}

export default Component;
