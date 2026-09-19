import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nym3mc6ux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nym3mc6ux"/>`,
		"fallback": "hugeicons:border-top-02",
	});
}

export default Component;
