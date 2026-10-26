import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hefuzsyto.css';
import '../../css/h/hy2durjjx.css';
import '../../css/y/y3v2sl6-y.css';

const viewBox = {"width":51.74,"height":70};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hefuzsyto"/><path class="hy2durjjx"/><path class="y3v2sl6-y"/>`,
		"fallback": "thesvg:aero",
	});
}

export default Component;
