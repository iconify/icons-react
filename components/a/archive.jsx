import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml95i05tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml95i05tz"/>`,
		"fallback": "typcn:archive",
	});
}

export default Component;
