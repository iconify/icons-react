import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2lgj0dvw.css';
import '../../css/y/ylt16dbqe.css';
import '../../css/i/i2exa8tnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2lgj0dvw"/><path class="ylt16dbqe"/><path class="i2exa8tnb"/>`,
		"fallback": "energy-icons:guitar-48-bold",
	});
}

export default Component;
