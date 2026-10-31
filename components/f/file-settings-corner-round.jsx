import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zllshdcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zllshdcyz"/>`,
		"fallback": "coolicons:file-settings-corner-round",
	});
}

export default Component;
