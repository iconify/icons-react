import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kf8931yxd.css';
import '../../css/o/ohmm4ymdc.css';
import '../../css/x/x4owwtbzm.css';
import '../../css/z/zc_uuwb9s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kf8931yxd"/><path class="ohmm4ymdc"/><path class="x4owwtbzm"/><path class="zc_uuwb9s"/>`,
		"fallback": "energy-icons:barn-20",
	});
}

export default Component;
