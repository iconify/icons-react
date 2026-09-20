import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvq-20bfq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vvq-20bfq"/>`,
		"fallback": "streamline-flex:film-solid",
	});
}

export default Component;
