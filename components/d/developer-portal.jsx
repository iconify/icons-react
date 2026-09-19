import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk21cmshl.css';
import '../../css/t/tyqxa-33r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk21cmshl"/><path class="tyqxa-33r"/>`,
		"fallback": "gcp:developer-portal",
	});
}

export default Component;
