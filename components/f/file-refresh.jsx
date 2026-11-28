import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pct8yx7mn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pct8yx7mn"/>`,
		"fallback": "noviair:file-refresh",
	});
}

export default Component;
