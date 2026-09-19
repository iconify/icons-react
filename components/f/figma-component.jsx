import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vaetcy9pl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vaetcy9pl"/>`,
		"fallback": "icon-park-solid:figma-component",
	});
}

export default Component;
