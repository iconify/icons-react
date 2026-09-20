import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm81rxbus.css';
import '../../css/o/otjlhglbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm81rxbus"/><path class="otjlhglbh"/>`,
		"fallback": "selfhst:html5-dark",
	});
}

export default Component;
