import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m85fekbws.css';
import '../../css/z/z6n_ozb8v.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m85fekbws"/><path class="z6n_ozb8v"/>`,
		"fallback": "medical-icon:i-social-services",
	});
}

export default Component;
