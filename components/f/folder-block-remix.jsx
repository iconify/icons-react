import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bqtlmobsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bqtlmobsf"/>`,
		"fallback": "streamline-sharp:folder-block-remix",
	});
}

export default Component;
