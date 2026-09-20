import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l62c7xi6z.css';
import '../../css/d/dc3cn71jk.css';
import '../../css/m/mphw5tchn.css';
import '../../css/f/fznprzbbk.css';
import '../../css/q/q_j05dn5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l62c7xi6z"/><path class="dc3cn71jk"/><path clip-rule="evenodd" class="mphw5tchn"/><path class="fznprzbbk"/><path class="q_j05dn5t"/>`,
		"fallback": "token:hvh",
	});
}

export default Component;
