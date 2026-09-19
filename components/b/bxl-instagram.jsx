import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt0e9abyt.css';
import '../../css/d/dijmg4j3t.css';
import '../../css/x/x8-393b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt0e9abyt"/><circle class="dijmg4j3t"/><path class="x8-393b-u"/>`,
		"fallback": "bx:bxl-instagram",
	});
}

export default Component;
