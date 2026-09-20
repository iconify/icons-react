import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl8aw5blo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl8aw5blo"/>`,
		"fallback": "thesvg-color:atlascloud",
	});
}

export default Component;
