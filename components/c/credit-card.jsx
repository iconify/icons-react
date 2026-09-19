import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq_pp9coz.css';
import '../../css/v/vslt2rbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer vq_pp9coz"/><path class="duoicon-primary-layer vslt2rbvd"/>`,
		"fallback": "duo-icons:credit-card",
	});
}

export default Component;
