import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec4h7ebhn.css';
import '../../css/x/xz2t00wzg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec4h7ebhn"/><path class="xz2t00wzg"/>`,
		"fallback": "energy-icons:green-jobs-20",
	});
}

export default Component;
