import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/l/lr6wkxb-c.css';
import '../../css/a/a7fphlb5n.css';
import '../../css/t/tvv7gjyas.css';
import '../../css/t/tooldrzdl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="lr6wkxb-c"/><path class="a7fphlb5n"/><path class="tvv7gjyas"/><path class="tooldrzdl"/>`,
		"fallback": "energy-icons:accessibility-20",
	});
}

export default Component;
