import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/go04vzgue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="go04vzgue"/>`,
		"fallback": "icon-park-solid:hammer-and-anvil",
	});
}

export default Component;
