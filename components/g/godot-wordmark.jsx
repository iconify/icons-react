import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnt2i8b5v.css';
import '../../css/p/p2p39tb8n.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnt2i8b5v"/><path class="p2p39tb8n"/>`,
		"fallback": "devicon-plain:godot-wordmark",
	});
}

export default Component;
