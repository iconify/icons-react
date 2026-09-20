import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq4o54ofz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kq4o54ofz"/>`,
		"fallback": "streamline-plump:coffee-mug-remix",
	});
}

export default Component;
