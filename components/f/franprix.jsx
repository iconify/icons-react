import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqmw9v60f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqmw9v60f"/>`,
		"fallback": "thesvg-color:franprix",
	});
}

export default Component;
