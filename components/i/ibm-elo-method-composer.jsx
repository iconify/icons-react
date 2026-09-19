import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvtb7tb3p.css';
import '../../css/g/gor6sh79f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvtb7tb3p"/><path class="gor6sh79f"/>`,
		"fallback": "carbon:ibm-elo-method-composer",
	});
}

export default Component;
