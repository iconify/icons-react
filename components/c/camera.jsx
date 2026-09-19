import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxju7t5db.css';
import '../../css/b/bil0cqbwg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hxju7t5db"/><circle class="bil0cqbwg"/></g>`,
		"fallback": "charm:camera",
	});
}

export default Component;
