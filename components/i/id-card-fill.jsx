import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8i3s3bzy.css';
import '../../css/b/bgzw1sbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8i3s3bzy"/><path class="bgzw1sbuu"/>`,
		"fallback": "mage:id-card-fill",
	});
}

export default Component;
