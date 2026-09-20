import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia6vczrdf.css';
import '../../css/t/t844gqbkh.css';
import '../../css/z/zii0e-b-x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia6vczrdf"/><path class="t844gqbkh"/><path class="zii0e-b-x"/>`,
		"fallback": "streamline-pixel:design-ink-pen",
	});
}

export default Component;
