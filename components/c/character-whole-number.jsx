import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9hw_hbtw.css';
import '../../css/j/jej-4abki.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9hw_hbtw"/><path class="jej-4abki"/>`,
		"fallback": "carbon:character-whole-number",
	});
}

export default Component;
