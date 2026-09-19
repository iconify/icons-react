import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5trbc1a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to5trbc1a"/>`,
		"fallback": "fluent-emoji-flat:divide",
	});
}

export default Component;
