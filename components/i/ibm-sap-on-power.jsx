import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn3c1ccis.css';
import '../../css/c/c5ym2eb1u.css';
import '../../css/k/kfc99jb4u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn3c1ccis"/><circle class="c5ym2eb1u"/><path class="kfc99jb4u"/>`,
		"fallback": "carbon:ibm-sap-on-power",
	});
}

export default Component;
