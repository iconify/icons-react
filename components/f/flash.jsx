import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz60fbc6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz60fbc6a"/>`,
		"fallback": "material-icon-theme:flash",
	});
}

export default Component;
