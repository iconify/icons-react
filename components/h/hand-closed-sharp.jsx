import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io7iwj50t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io7iwj50t"/>`,
		"fallback": "keyline-icons:hand-closed-sharp",
	});
}

export default Component;
