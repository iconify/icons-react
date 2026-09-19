import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0t0l7b9n.css';
import '../../css/b/bzew_ab9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0t0l7b9n"/><path class="bzew_ab9d"/>`,
		"fallback": "bxl:crunchyroll",
	});
}

export default Component;
