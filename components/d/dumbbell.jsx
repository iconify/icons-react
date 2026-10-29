import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc-koab6b.css';
import '../../css/m/m0g6xbd6f.css';
import '../../css/r/r7my--sgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc-koab6b"/><path class="m0g6xbd6f"/><path class="r7my--sgm"/>`,
		"fallback": "withicons-bauhaus:dumbbell",
	});
}

export default Component;
