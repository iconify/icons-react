import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9mo31emm.css';
import '../../css/r/r2k-5lb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9mo31emm"/><path class="r2k-5lb6a"/>`,
		"fallback": "boxicons:arrow-in-up-right-circle-filled",
	});
}

export default Component;
