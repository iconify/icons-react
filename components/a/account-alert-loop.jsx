import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/j/ji8mks.css';
import '../../css/w/wcbo4y.css';
import '../../css/c/cu0zwu.css';
import '../../css/c/ct9a5j.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';
import '../../css/s/sw-cnj-zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c ji8mks"/><path class="a0m25c wcbo4y"/><path class="a0m25c cu0zwu"/><path class="a0m25c ct9a5j"/>`,
		"fallback": "line-md:account-alert-loop",
	});
}

export default Component;
