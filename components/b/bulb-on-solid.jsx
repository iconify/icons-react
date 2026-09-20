import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a4545e9po.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a4545e9po"/>`,
		"fallback": "teenyicons:bulb-on-solid",
	});
}

export default Component;
