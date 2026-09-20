import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k788n-8wd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k788n-8wd"/>`,
		"fallback": "meteor-icons:cloud-lightning",
	});
}

export default Component;
