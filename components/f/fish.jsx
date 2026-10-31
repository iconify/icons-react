import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq0y6rv0t.css';
import '../../css/j/ju6ln2bjw.css';
import '../../css/s/sah522b5e.css';
import '../../css/k/krkjhqbxc.css';
import '../../css/q/qr7g99buu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq0y6rv0t"/><path class="ju6ln2bjw"/><path class="sah522b5e"/><path class="krkjhqbxc"/><path class="qr7g99buu"/>`,
		"fallback": "iconito:fish",
	});
}

export default Component;
