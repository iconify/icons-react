import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqbik8bfl.css';
import '../../css/y/y3bjwfy8q.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqbik8bfl"/><path class="y3bjwfy8q"/>`,
		"fallback": "medical-icon:i-outpatient",
	});
}

export default Component;
