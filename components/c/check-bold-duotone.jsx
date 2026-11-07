import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoshjbpvd.css';
import '../../css/b/bt37pjbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoshjbpvd"/><path class="bt37pjbzd"/>`,
		"fallback": "solar:check-bold-duotone",
	});
}

export default Component;
