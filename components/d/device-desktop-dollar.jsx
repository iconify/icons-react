import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv0o_sfja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv0o_sfja"/>`,
		"fallback": "tabler:device-desktop-dollar",
	});
}

export default Component;
