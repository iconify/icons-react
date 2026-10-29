import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwc28duwl.css';
import '../../css/p/p0vvxskvk.css';
import '../../css/r/r51vm3woy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwc28duwl wm-k"/><path class="p0vvxskvk wm-k"/><path class="r51vm3woy wm-a"/>`,
		"fallback": "withicons-bauhaus:chevron-first",
	});
}

export default Component;
