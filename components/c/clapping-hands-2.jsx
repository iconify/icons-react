import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8za7kbgt.css';
import '../../css/n/nqlzko5vk.css';
import '../../css/d/dp6zglblp.css';
import '../../css/l/lcvvitbre.css';
import '../../css/s/s8f996are.css';
import '../../css/x/xzggt3axn.css';
import '../../css/h/hu2gv17rr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8za7kbgt"/><path class="nqlzko5vk"/><path class="dp6zglblp"/><path class="lcvvitbre"/><path class="s8f996are"/><path class="xzggt3axn"/><path class="hu2gv17rr"/>`,
		"fallback": "streamline-emojis:clapping-hands-2",
	});
}

export default Component;
