import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/im9_jacuo.css';
import '../../css/w/wjmq22vfa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="im9_jacuo"/><path class="wjmq22vfa"/>`,
		"fallback": "selfhst:beekeeper-studio",
	});
}

export default Component;
