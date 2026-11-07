import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayqtpboig.css';
import '../../css/v/vhfpguceu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ayqtpboig"/><path class="vhfpguceu"/>`,
		"fallback": "solar:heart-bold-duotone",
	});
}

export default Component;
