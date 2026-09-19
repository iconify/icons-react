import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb7uk-s2q.css';
import '../../css/j/jlc7xm8ek.css';
import '../../css/i/imatvgb6b.css';
import '../../css/v/vzvy3h3wk.css';
import '../../css/f/fbdus0b7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb7uk-s2q"/><path class="jlc7xm8ek"/><path class="imatvgb6b"/><circle class="vzvy3h3wk"/><path class="fbdus0b7r"/>`,
		"fallback": "fxemoji:bow",
	});
}

export default Component;
