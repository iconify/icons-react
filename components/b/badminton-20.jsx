import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fha4pdfyp.css';
import '../../css/r/r9o8-5b4i.css';
import '../../css/e/eng9yvngw.css';
import '../../css/x/xioe6dzyx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fha4pdfyp"/><path class="r9o8-5b4i"/><path class="eng9yvngw"/><path class="xioe6dzyx"/>`,
		"fallback": "energy-icons:badminton-20",
	});
}

export default Component;
