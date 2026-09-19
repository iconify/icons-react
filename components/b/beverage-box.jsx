import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9zj8ibnp.css';
import '../../css/h/h7g5bjbpi.css';
import '../../css/h/h9zo521qz.css';
import '../../css/j/jgur33bzz.css';
import '../../css/b/bahbv3b3s.css';
import '../../css/h/hsptahbsl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y9zj8ibnp"/><path class="h7g5bjbpi"/><path class="h9zo521qz"/><path class="jgur33bzz"/><path class="bahbv3b3s"/><path class="hsptahbsl"/></g>`,
		"fallback": "fluent-emoji-flat:beverage-box",
	});
}

export default Component;
