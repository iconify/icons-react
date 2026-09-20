import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a83a_ac-d.css';
import '../../css/j/jy-0-ba4q.css';
import '../../css/d/dheiwnbom.css';

const viewBox = {"width":304,"height":182};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a83a_ac-d"/><path class="jy-0-ba4q"/><path class="dheiwnbom"/>`,
		"fallback": "thesvg-color:amazon-web-services-dark",
	});
}

export default Component;
