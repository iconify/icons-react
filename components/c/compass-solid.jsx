import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tirttc0dw.css';
import '../../css/b/bb02f9bqm.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 tirttc0dw"/><path class="bb02f9bqm clr-i-solid clr-i-solid-path-2"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:compass-solid",
	});
}

export default Component;
