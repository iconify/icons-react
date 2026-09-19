import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjd2j9mqk.css';
import '../../css/m/mfah0lbew.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 yjd2j9mqk"/><path class="clr-i-solid clr-i-solid-path-1 mfah0lbew"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:filter-solid",
	});
}

export default Component;
