import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgpzimtyu.css';
import '../../css/b/bydz9ac_v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgpzimtyu"/><path class="bydz9ac_v"/>`,
		"fallback": "carbon:chart-cluster-bar",
	});
}

export default Component;
