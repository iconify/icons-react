import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv0mj9bsl.css';
import '../../css/h/hmo75wbbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cv0mj9bsl"/><path class="hmo75wbbp"/>`,
		"fallback": "ion:camera-sharp",
	});
}

export default Component;
