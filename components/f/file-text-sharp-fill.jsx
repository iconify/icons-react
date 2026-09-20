import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt9tg9b2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt9tg9b2o"/>`,
		"fallback": "keyline-icons:file-text-sharp-fill",
	});
}

export default Component;
