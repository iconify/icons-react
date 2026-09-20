import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoo-m9bse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoo-m9bse"/>`,
		"fallback": "ix:configuration-safety",
	});
}

export default Component;
