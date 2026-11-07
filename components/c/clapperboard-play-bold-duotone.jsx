import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7zz7vboy.css';
import '../../css/i/ipogvcwzq.css';
import '../../css/n/nr35mg1ux.css';
import '../../css/i/i9yxaoc2b.css';
import '../../css/b/b1qrr3bxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y7zz7vboy"/><path class="ipogvcwzq"/><path class="nr35mg1ux"/><path class="i9yxaoc2b"/><path class="b1qrr3bxa"/>`,
		"fallback": "solar:clapperboard-play-bold-duotone",
	});
}

export default Component;
