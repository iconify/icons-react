import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwskhw6wu.css';
import '../../css/j/jmbniybow.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwskhw6wu"/><path class="jmbniybow"/>`,
		"fallback": "icomoon-free:blog",
	});
}

export default Component;
