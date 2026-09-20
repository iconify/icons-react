import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htsry0swe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="htsry0swe"/>`,
		"fallback": "keyline-icons:circle-align-offset-bottom-sharp-fill",
	});
}

export default Component;
