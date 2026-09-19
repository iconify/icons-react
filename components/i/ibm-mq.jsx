import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e39vi3inw.css';
import '../../css/t/tpa9noblp.css';
import '../../css/o/ou9bix05e.css';
import '../../css/u/u58babtsd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e39vi3inw"/><path class="tpa9noblp"/><path class="ou9bix05e"/><path class="u58babtsd"/>`,
		"fallback": "carbon:ibm-mq",
	});
}

export default Component;
