import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-y0upb3c.css';
import '../../css/h/hmwkp1a3h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-y0upb3c"/><path clip-rule="evenodd" class="hmwkp1a3h"/>`,
		"fallback": "teenyicons:instagram-solid",
	});
}

export default Component;
