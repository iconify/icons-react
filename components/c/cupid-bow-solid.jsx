import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgzo67gdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgzo67gdx"/>`,
		"fallback": "withicons:cupid-bow-solid",
	});
}

export default Component;
