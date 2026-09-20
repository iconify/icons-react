import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqg48nbgt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tqg48nbgt"/>`,
		"fallback": "teenyicons:clock-solid",
	});
}

export default Component;
