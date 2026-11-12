import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eht4b2bcf.css';
import '../../css/c/c7ebenbdm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eht4b2bcf"/><path class="c7ebenbdm"/>`,
		"fallback": "selfhst:flarum-light",
	});
}

export default Component;
