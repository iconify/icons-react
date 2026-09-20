import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pst0mi77l.css';
import '../../css/b/bhja3k33r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pst0mi77l"/><path class="bhja3k33r"/>`,
		"fallback": "stash:cog-duotone",
	});
}

export default Component;
