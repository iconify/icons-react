import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbskt6s3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbskt6s3t"/>`,
		"fallback": "sidekickicons:badge",
	});
}

export default Component;
