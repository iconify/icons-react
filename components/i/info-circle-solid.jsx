import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8w3rabjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8w3rabjy"/>`,
		"fallback": "stash:info-circle-solid",
	});
}

export default Component;
