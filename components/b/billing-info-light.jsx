import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zazwy-4qg.css';
import '../../css/i/iwtd4lopd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zazwy-4qg"/><path class="iwtd4lopd"/>`,
		"fallback": "stash:billing-info-light",
	});
}

export default Component;
