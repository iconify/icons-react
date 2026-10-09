import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at36eqb4a.css';
import '../../css/h/hfk-_-6tj.css';
import '../../css/v/vmzapni5c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at36eqb4a"/><path class="hfk-_-6tj"/><path class="vmzapni5c"/>`,
		"fallback": "energy-icons:grant-20-bold",
	});
}

export default Component;
