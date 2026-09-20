import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow_1ol8gw.css';
import '../../css/c/c27sm6bel.css';
import '../../css/o/o3_oddivz.css';
import '../../css/j/j79e0y2ro.css';

const viewBox = {"width":388,"height":86};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ow_1ol8gw"/><path clip-rule="evenodd" class="c27sm6bel"/><path clip-rule="evenodd" class="o3_oddivz"/><path class="j79e0y2ro"/>`,
		"fallback": "thesvg-color:amazon-kindle",
	});
}

export default Component;
