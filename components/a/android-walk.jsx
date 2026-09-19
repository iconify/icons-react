import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gggi5_ica.css';
import '../../css/o/o_oa07brn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gggi5_ica"/><path class="o_oa07brn"/>`,
		"fallback": "ion:android-walk",
	});
}

export default Component;
