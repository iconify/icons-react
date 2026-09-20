import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qyxmmfrwe.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qyxmmfrwe"/><path class="xxvlnybzz"/>`,
		"fallback": "teenyicons:battery-1-solid",
	});
}

export default Component;
