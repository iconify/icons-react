import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkum2dbuo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkum2dbuo"/>`,
		"fallback": "fa7-solid:chart-simple",
	});
}

export default Component;
