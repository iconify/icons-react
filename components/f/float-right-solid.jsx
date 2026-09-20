import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og380tjvj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og380tjvj"/>`,
		"fallback": "teenyicons:float-right-solid",
	});
}

export default Component;
