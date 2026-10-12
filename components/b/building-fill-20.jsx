import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_6gdx37i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_6gdx37i"/>`,
		"fallback": "garden:building-fill-20",
	});
}

export default Component;
