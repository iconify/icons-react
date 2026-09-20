import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr8pc26yi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lr8pc26yi"/>`,
		"fallback": "streamline-flex:brightness-4-solid",
	});
}

export default Component;
