import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fklgh1ehi.css';
import '../../css/w/wszt4c0fp.css';
import '../../css/t/th5rvlnyl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fklgh1ehi"/><circle class="wszt4c0fp"/><path class="th5rvlnyl"/>`,
		"fallback": "carbon:ibm-engineering-requirements-doors-next",
	});
}

export default Component;
