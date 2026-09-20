import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvnprm43r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvnprm43r"/>`,
		"fallback": "streamline-ultimate:hard-drive-1-bold",
	});
}

export default Component;
