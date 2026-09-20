import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr3lh1bzk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr3lh1bzk"/>`,
		"fallback": "selfhst:fusionauth-light",
	});
}

export default Component;
