import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le1owpwna.css';
import '../../css/m/mj0qwqbjq.css';
import '../../css/g/g2nzm8bjk.css';
import '../../css/d/d4c3_8vfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le1owpwna wm-k"/><path class="mj0qwqbjq wm-k"/><path class="g2nzm8bjk wm-a"/><path class="d4c3_8vfk wm-a"/>`,
		"fallback": "withicons-bauhaus:chevrons-down",
	});
}

export default Component;
