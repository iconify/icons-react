import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt34fhb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt34fhb5a"/>`,
		"fallback": "uim:500px",
	});
}

export default Component;
