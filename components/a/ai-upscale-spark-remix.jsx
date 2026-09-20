import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlu90bg6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dlu90bg6l"/>`,
		"fallback": "streamline-sharp:ai-upscale-spark-remix",
	});
}

export default Component;
