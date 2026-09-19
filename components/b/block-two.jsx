import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adjf9fbnw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adjf9fbnw"/>`,
		"fallback": "icon-park-outline:block-two",
	});
}

export default Component;
