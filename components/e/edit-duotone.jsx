import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfp4bcqla.css';
import '../../css/v/viclgbp1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfp4bcqla"/><path class="viclgbp1q"/>`,
		"fallback": "lets-icons:edit-duotone",
	});
}

export default Component;
