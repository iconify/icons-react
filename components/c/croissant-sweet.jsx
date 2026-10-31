import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iwabxuw0y.css';
import '../../css/i/ia-a0ho7e.css';
import '../../css/j/jweu39dud.css';
import '../../css/c/c454r3aku.css';
import '../../css/z/zstz28lhn.css';
import '../../css/x/xw0401b9a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iwabxuw0y"/><path class="ia-a0ho7e"/><path class="jweu39dud"/><path class="c454r3aku"/><path class="zstz28lhn"/><path class="xw0401b9a"/>`,
		"fallback": "iconito:croissant-sweet",
	});
}

export default Component;
