import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io4qvkb2o.css';
import '../../css/g/g4cgbhb9g.css';
import '../../css/z/z2xkpqbil.css';
import '../../css/o/o6n8xybdf.css';

const viewBox = {"width":1000,"height":209.346};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io4qvkb2o"/><path class="g4cgbhb9g"/><path class="z2xkpqbil"/><path class="o6n8xybdf"/>`,
		"fallback": "thesvg-color:dominos-pizza",
	});
}

export default Component;
