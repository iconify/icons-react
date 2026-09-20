import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hegyw304a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hegyw304a"/>`,
		"fallback": "streamline-plump:ai-generate-voice-robot-2-solid",
	});
}

export default Component;
