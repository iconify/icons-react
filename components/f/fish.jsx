import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s--u84b9a.css';
import '../../css/e/ej7hsirhs.css';
import '../../css/i/iur5ai2ln.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s--u84b9a"/><path class="ej7hsirhs"/><path class="iur5ai2ln"/></g>`,
		"fallback": "fluent-emoji-flat:fish",
	});
}

export default Component;
