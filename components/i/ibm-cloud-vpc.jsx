import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz4qtlb3x.css';
import '../../css/g/glzb1mbfz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz4qtlb3x"/><path class="glzb1mbfz"/>`,
		"fallback": "carbon:ibm-cloud-vpc",
	});
}

export default Component;
