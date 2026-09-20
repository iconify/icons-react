import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4lr9viii.css';
import '../../css/b/b4vatjbbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c4lr9viii"/><path class="b4vatjbbg"/></g>`,
		"fallback": "mage:database-2",
	});
}

export default Component;
