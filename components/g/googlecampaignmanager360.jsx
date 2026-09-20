import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxpv5-bhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxpv5-bhq"/>`,
		"fallback": "simple-icons:googlecampaignmanager360",
	});
}

export default Component;
