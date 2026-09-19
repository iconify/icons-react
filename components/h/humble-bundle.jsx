import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svm2kk87j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svm2kk87j"/>`,
		"fallback": "cib:humble-bundle",
	});
}

export default Component;
