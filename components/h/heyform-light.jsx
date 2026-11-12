import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7bwm5bym.css';
import '../../css/p/pwgbt_brp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7bwm5bym"/><path class="pwgbt_brp"/>`,
		"fallback": "selfhst:heyform-light",
	});
}

export default Component;
