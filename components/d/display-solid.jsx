import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we9ae-bgu.css';
import '../../css/w/wn108cbch.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 we9ae-bgu"/><path class="clr-i-solid clr-i-solid-path-2 wn108cbch"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:display-solid",
	});
}

export default Component;
