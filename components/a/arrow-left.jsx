import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e00gdx4ut.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e00gdx4ut"/>`,
		"fallback": "fa-solid:arrow-left",
	});
}

export default Component;
