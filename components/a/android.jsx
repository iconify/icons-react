import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea-yh5bmv.css';
import '../../css/y/yscrwi0no.css';
import '../../css/f/fzgbg6_rc.css';
import '../../css/v/vqkge80ua.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea-yh5bmv"/><path class="yscrwi0no"/><path class="fzgbg6_rc"/><path class="vqkge80ua"/>`,
		"fallback": "devicon:android",
	});
}

export default Component;
