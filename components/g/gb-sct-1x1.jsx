import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdgac_b5a.css';
import '../../css/b/bf6u4_bha.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdgac_b5a"/><path transform="scale(102.4 170.66667)" class="bf6u4_bha"/>`,
		"fallback": "flag:gb-sct-1x1",
	});
}

export default Component;
