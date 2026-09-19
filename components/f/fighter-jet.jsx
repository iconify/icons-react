import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkvj90bkw.css';

const viewBox = {"width":1920,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkvj90bkw"/>`,
		"fallback": "fa:fighter-jet",
	});
}

export default Component;
