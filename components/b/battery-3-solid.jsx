import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvt8_wbay.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qvt8_wbay"/><path class="xxvlnybzz"/>`,
		"fallback": "teenyicons:battery-3-solid",
	});
}

export default Component;
