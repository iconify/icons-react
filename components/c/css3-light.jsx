import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqn4acquj.css';
import '../../css/e/eyi6n2idh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqn4acquj"/><path class="eyi6n2idh"/>`,
		"fallback": "selfhst:css3-light",
	});
}

export default Component;
