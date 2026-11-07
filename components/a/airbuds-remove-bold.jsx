import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9ztj-b2m.css';
import '../../css/c/cg7x8js6g.css';
import '../../css/e/em-82ubin.css';
import '../../css/s/sno1kmbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j9ztj-b2m"/><path clip-rule="evenodd" class="cg7x8js6g"/><path class="em-82ubin"/><path clip-rule="evenodd" class="sno1kmbxw"/>`,
		"fallback": "solar:airbuds-remove-bold",
	});
}

export default Component;
