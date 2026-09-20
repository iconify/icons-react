import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezeah_box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezeah_box"/>`,
		"fallback": "streamline-ultimate:design-tool-magic-wand",
	});
}

export default Component;
