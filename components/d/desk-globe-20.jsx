import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg0cyhbjt.css';
import '../../css/h/h3yshrbmu.css';
import '../../css/m/mt3wvccip.css';
import '../../css/h/h9onl-gti.css';
import '../../css/m/m68u4abjj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg0cyhbjt"/><path class="h3yshrbmu"/><path class="mt3wvccip"/><path class="h9onl-gti"/><path class="m68u4abjj"/>`,
		"fallback": "energy-icons:desk-globe-20",
	});
}

export default Component;
