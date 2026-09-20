import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so5y9pc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so5y9pc7i"/>`,
		"fallback": "mdi:edit-off",
	});
}

export default Component;
