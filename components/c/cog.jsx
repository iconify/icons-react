import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aud9bzb6h.css';
import '../../css/x/x4saxe2xe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aud9bzb6h"/><path class="x4saxe2xe"/>`,
		"fallback": "cil:cog",
	});
}

export default Component;
