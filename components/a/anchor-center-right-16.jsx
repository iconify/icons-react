import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v528_2bxm.css';
import '../../css/v/voocfbbkt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v528_2bxm"/><path class="voocfbbkt"/>`,
		"fallback": "qlementine-icons:anchor-center-right-16",
	});
}

export default Component;
