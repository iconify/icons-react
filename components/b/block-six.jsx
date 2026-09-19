import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsawk4bzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsawk4bzo"/>`,
		"fallback": "icon-park-solid:block-six",
	});
}

export default Component;
