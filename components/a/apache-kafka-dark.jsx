import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltow3qbyg.css';

const viewBox = {"width":413,"height":413,"left":-78.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltow3qbyg"/>`,
		"fallback": "thesvg-color:apache-kafka-dark",
	});
}

export default Component;
