import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyh6w9b_y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyh6w9b_y"/>`,
		"fallback": "icon-park-outline:block-one",
	});
}

export default Component;
