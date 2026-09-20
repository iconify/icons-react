import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vplm-nswe.css';
import '../../css/o/oplsioe0u.css';

const viewBox = {"width":16,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vplm-nswe"/><path class="oplsioe0u"/>`,
		"fallback": "teenyicons:envelope-solid",
	});
}

export default Component;
