import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loygki_gv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loygki_gv"/>`,
		"fallback": "stash:cog",
	});
}

export default Component;
