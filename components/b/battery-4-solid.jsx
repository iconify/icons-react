import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1y2cwd5s.css';
import '../../css/x/xxvlnybzz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1y2cwd5s"/><path class="xxvlnybzz"/>`,
		"fallback": "teenyicons:battery-4-solid",
	});
}

export default Component;
