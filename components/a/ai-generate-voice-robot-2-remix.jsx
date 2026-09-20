import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrwvep5rc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qrwvep5rc"/>`,
		"fallback": "streamline-plump:ai-generate-voice-robot-2-remix",
	});
}

export default Component;
