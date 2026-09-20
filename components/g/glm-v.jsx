import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9n6u8b7u.css';
import '../../css/n/nlmny6bfj.css';
import '../../css/v/vuw91fa1l.css';
import '../../css/e/exs6scbnc.css';
import '../../css/m/mqxvrjcit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9n6u8b7u"/><path class="nlmny6bfj"/><path class="vuw91fa1l"/><path class="exs6scbnc"/><path class="mqxvrjcit"/>`,
		"fallback": "thesvg-color:glm-v",
	});
}

export default Component;
