import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcre-4bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcre-4bsl"/>`,
		"fallback": "thesvg-color:analogue",
	});
}

export default Component;
