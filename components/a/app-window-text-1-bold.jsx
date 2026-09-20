import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8nmi9b7f.css';
import '../../css/l/la22zob0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8nmi9b7f"/><path class="la22zob0t"/>`,
		"fallback": "streamline-ultimate:app-window-text-1-bold",
	});
}

export default Component;
