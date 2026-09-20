import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iauax3bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iauax3bdy"/>`,
		"fallback": "mingcute:burj-al-arab-fill",
	});
}

export default Component;
