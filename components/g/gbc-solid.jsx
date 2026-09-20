import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de42aeb0l.css';
import '../../css/y/yfn2vsbhb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de42aeb0l"/><path clip-rule="evenodd" class="yfn2vsbhb"/>`,
		"fallback": "teenyicons:gbc-solid",
	});
}

export default Component;
