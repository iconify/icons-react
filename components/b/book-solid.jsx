import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-xzn5b1r.css';
import '../../css/a/avruddccb.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 t-xzn5b1r"/><path class="avruddccb clr-i-solid clr-i-solid-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:book-solid",
	});
}

export default Component;
