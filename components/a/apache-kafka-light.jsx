import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5cdwcp1f.css';

const viewBox = {"width":413,"height":413,"left":-78.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5cdwcp1f"/>`,
		"fallback": "thesvg-color:apache-kafka-light",
	});
}

export default Component;
