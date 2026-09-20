import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynrrldbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ynrrldbcy"/>`,
		"fallback": "tabler:brand-google-filled",
	});
}

export default Component;
