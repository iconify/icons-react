import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcozhwbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcozhwbmz"/>`,
		"fallback": "iconaut:corner-sharp-solid",
	});
}

export default Component;
