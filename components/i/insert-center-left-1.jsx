import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr9vhtbnq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr9vhtbnq"/>`,
		"fallback": "streamline-flex:insert-center-left-1",
	});
}

export default Component;
