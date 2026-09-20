import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1qmh6bea.css';
import '../../css/k/k52lm57aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1qmh6bea"/><path clip-rule="evenodd" class="k52lm57aa"/>`,
		"fallback": "stash:folder-lock-solid",
	});
}

export default Component;
