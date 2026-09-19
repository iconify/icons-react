import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hadnjac-a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hadnjac-a"/>`,
		"fallback": "fluent-mdl2:home-solid",
	});
}

export default Component;
