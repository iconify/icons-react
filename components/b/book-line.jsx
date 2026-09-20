import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzrhttb3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzrhttb3c"/>`,
		"fallback": "si:book-line",
	});
}

export default Component;
