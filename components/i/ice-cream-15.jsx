import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc97kzb0z.css';
import '../../css/s/sgq67hbqs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc97kzb0z"/><path class="sgq67hbqs"/>`,
		"fallback": "maki:ice-cream-15",
	});
}

export default Component;
