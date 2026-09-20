import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgj6zf-os.css';
import '../../css/d/dif-cubim.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgj6zf-os"/><path class="dif-cubim"/>`,
		"fallback": "teenyicons:hospital-solid",
	});
}

export default Component;
