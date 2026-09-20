import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fowq36bhd.css';
import '../../css/u/un3nlpbjl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fowq36bhd"/><path class="un3nlpbjl"/>`,
		"fallback": "selfhst:epic-games",
	});
}

export default Component;
