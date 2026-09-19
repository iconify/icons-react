import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdsxwd93f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdsxwd93f"/>`,
		"fallback": "icon-park-outline:block-six",
	});
}

export default Component;
