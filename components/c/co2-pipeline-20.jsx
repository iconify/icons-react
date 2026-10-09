import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv6_rebxi.css';
import '../../css/a/ak3pdnn1p.css';
import '../../css/s/sv8sqhg9g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv6_rebxi"/><path class="ak3pdnn1p"/><path class="sv8sqhg9g"/>`,
		"fallback": "energy-icons:co2-pipeline-20",
	});
}

export default Component;
