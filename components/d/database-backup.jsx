import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6aivbzl.css';
import '../../css/u/uyqxwgbgq.css';
import '../../css/w/wq8panzid.css';
import '../../css/o/o1xiohgss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="tj6aivbzl"/><path class="uyqxwgbgq"/><path class="wq8panzid"/><path class="o1xiohgss"/></g>`,
		"fallback": "lucide:database-backup",
	});
}

export default Component;
