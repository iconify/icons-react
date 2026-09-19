import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq6kcibbx.css';
import '../../css/n/nw_1midni.css';
import '../../css/g/gtxro9plz.css';
import '../../css/t/t228px9jw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq6kcibbx"/><path class="nw_1midni"/><path class="gtxro9plz"/><path class="t228px9jw"/>`,
		"fallback": "ion:information-circle-outline",
	});
}

export default Component;
