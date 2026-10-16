import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqfw9ounj.css';
import '../../css/d/dydpk_h_p.css';
import '../../css/y/yc2ch-bzb.css';
import '../../css/d/dhrpajl5x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqfw9ounj"/><path class="dydpk_h_p"/><path class="yc2ch-bzb"/><path class="dhrpajl5x"/>`,
		"fallback": "energy-icons:ice-storage-20",
	});
}

export default Component;
