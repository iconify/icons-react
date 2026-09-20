import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu4v59b1a.css';
import '../../css/d/dc02pybze.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu4v59b1a"/><path class="dc02pybze"/>`,
		"fallback": "pixel:crunchbase",
	});
}

export default Component;
