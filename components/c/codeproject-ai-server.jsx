import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kh0rf-b9f.css';
import '../../css/b/b54wsupbd.css';
import '../../css/t/trippqbss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kh0rf-b9f"/><path class="b54wsupbd"/><path class="trippqbss"/>`,
		"fallback": "selfhst:codeproject-ai-server",
	});
}

export default Component;
