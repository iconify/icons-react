import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtbaj_b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtbaj_b3u"/>`,
		"fallback": "ri:gallery-view-2",
	});
}

export default Component;
