import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxm1vbcze.css';
import '../../css/c/cdve484mo.css';
import '../../css/x/xwbticcgw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxm1vbcze"/><path class="cdve484mo"/><path class="xwbticcgw"/>`,
		"fallback": "energy-icons:hydrogen-trailer-20",
	});
}

export default Component;
