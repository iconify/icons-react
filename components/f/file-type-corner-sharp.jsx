import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkx37hb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkx37hb-b"/>`,
		"fallback": "keyline-icons:file-type-corner-sharp",
	});
}

export default Component;
