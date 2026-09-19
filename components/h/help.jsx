import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww4fyqbuj.css';
import '../../css/v/v0u2x7r8m.css';
import '../../css/h/ha-i43dwu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww4fyqbuj"/><circle class="v0u2x7r8m"/><path class="ha-i43dwu"/>`,
		"fallback": "carbon:help",
	});
}

export default Component;
