import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9mr-b15w.css';
import '../../css/e/ewvinnbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9mr-b15w"/><path class="ewvinnbde"/>`,
		"fallback": "octicon:credit-card-24",
	});
}

export default Component;
