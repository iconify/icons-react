import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oeqjc6bxu.css';
import '../../css/w/w6i9gcqco.css';
import '../../css/e/en701kbcf.css';
import '../../css/x/x05er1ebx.css';
import '../../css/k/kznva-0mg.css';
import '../../css/v/v9z5chbwc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oeqjc6bxu"/><circle class="w6i9gcqco"/><circle class="en701kbcf"/><circle class="x05er1ebx"/><path class="kznva-0mg"/><path class="v9z5chbwc"/>`,
		"fallback": "carbon:forecast-hail-30",
	});
}

export default Component;
