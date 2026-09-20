import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oolt7f-px.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oolt7f-px"/>`,
		"fallback": "streamline-flex:cyborg-2-solid",
	});
}

export default Component;
