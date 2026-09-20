import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noh39bbir.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="noh39bbir"/><path class="xxvlnybzz"/>`,
		"fallback": "teenyicons:battery-2-solid",
	});
}

export default Component;
