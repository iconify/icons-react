import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx4n9abmy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gx4n9abmy"/>`,
		"fallback": "streamline:dhammajak-remix",
	});
}

export default Component;
