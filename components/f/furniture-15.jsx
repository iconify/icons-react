import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrwijsb_g.css';
import '../../css/t/t2wyy31bc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrwijsb_g"/><path class="t2wyy31bc"/>`,
		"fallback": "maki:furniture-15",
	});
}

export default Component;
