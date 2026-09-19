import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/op-iqrcmv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="op-iqrcmv"/>`,
		"fallback": "carbon:cobol-upgrade-advisor",
	});
}

export default Component;
