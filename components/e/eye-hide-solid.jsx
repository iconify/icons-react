import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izt-xbfer.css';
import '../../css/b/buyojelvy.css';
import '../../css/q/qk1bvjeqe.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 izt-xbfer"/><path class="buyojelvy clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 qk1bvjeqe"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:eye-hide-solid",
	});
}

export default Component;
