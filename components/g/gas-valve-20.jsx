import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wccquhbix.css';
import '../../css/f/fkjo-obco.css';
import '../../css/s/shl882bup.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wccquhbix"/><path class="fkjo-obco"/><path class="shl882bup"/>`,
		"fallback": "energy-icons:gas-valve-20",
	});
}

export default Component;
