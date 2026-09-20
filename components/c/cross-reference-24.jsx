import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjwnci-_l.css';
import '../../css/i/izsswccel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjwnci-_l"/><path class="izsswccel"/>`,
		"fallback": "octicon:cross-reference-24",
	});
}

export default Component;
