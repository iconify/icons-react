import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pc4a8abel.css';
import '../../css/b/bkcl-r-9o.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 pc4a8abel"/><path class="bkcl-r-9o clr-i-solid clr-i-solid-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:email-solid",
	});
}

export default Component;
