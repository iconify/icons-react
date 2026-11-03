import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx3sflbzb.css';
import '../../css/f/fntwqg-7t.css';
import '../../css/b/blgoysbln.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx3sflbzb"/><path class="fntwqg-7t"/><path class="blgoysbln"/>`,
		"fallback": "devicon:homeassistant-wordmark",
	});
}

export default Component;
