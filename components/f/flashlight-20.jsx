import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeonhzbov.css';
import '../../css/u/utwwk0b7p.css';
import '../../css/w/wwuvbm56v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeonhzbov"/><path class="utwwk0b7p"/><path class="wwuvbm56v"/>`,
		"fallback": "energy-icons:flashlight-20",
	});
}

export default Component;
