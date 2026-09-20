import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0n9b51wa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0n9b51wa"/>`,
		"fallback": "teenyicons:float-left-solid",
	});
}

export default Component;
