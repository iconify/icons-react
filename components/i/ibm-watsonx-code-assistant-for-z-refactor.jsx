import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czsubus_w.css';
import '../../css/r/rfqi4njim.css';
import '../../css/b/b6fhfryel.css';
import '../../css/c/c3v_g_mjq.css';
import '../../css/c/c-jdkp9ce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czsubus_w"/><circle class="rfqi4njim"/><path class="b6fhfryel"/><circle class="c3v_g_mjq"/><path class="c-jdkp9ce"/>`,
		"fallback": "carbon:ibm-watsonx-code-assistant-for-z-refactor",
	});
}

export default Component;
