import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur14uwb7l.css';
import '../../css/h/h-cp089_o.css';
import '../../css/t/teaoxxbwq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur14uwb7l"/><path class="h-cp089_o"/><path class="teaoxxbwq"/>`,
		"fallback": "streamline-emojis:children-crossing",
	});
}

export default Component;
