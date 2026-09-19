import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afof-g82x.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afof-g82x"/>`,
		"fallback": "fa7-solid:dollar-sign",
	});
}

export default Component;
