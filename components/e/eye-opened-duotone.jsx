import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7h45sbre.css';
import '../../css/s/s1zok783v.css';
import '../../css/a/a53wavbxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7h45sbre"/><path class="s1zok783v"/><path class="a53wavbxt"/>`,
		"fallback": "stash:eye-opened-duotone",
	});
}

export default Component;
