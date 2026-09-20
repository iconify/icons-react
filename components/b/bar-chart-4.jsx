import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wav--fbep.css';
import '../../css/p/p1jwip47c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wav--fbep"/><path clip-rule="evenodd" class="p1jwip47c"/>`,
		"fallback": "lineicons:bar-chart-4",
	});
}

export default Component;
