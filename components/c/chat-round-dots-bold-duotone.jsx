import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ije5jlbjh.css';
import '../../css/f/fvfljmboy.css';
import '../../css/b/bj7uuyqyo.css';
import '../../css/q/qk12x8byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ije5jlbjh"/><path class="fvfljmboy"/><path class="bj7uuyqyo"/><path class="qk12x8byc"/>`,
		"fallback": "solar:chat-round-dots-bold-duotone",
	});
}

export default Component;
