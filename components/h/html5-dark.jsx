import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm81rxbus.css';
import '../../css/a/at75z3hdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm81rxbus"/><path class="at75z3hdx"/>`,
		"fallback": "selfhst:html5-dark",
	});
}

export default Component;
