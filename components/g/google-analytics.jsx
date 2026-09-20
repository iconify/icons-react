import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p51s5nbfp.css';
import '../../css/v/vdipyz_so.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p51s5nbfp"/><path class="vdipyz_so"/>`,
		"fallback": "selfhst:google-analytics",
	});
}

export default Component;
