import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fojrlp28i.css';
import '../../css/j/jfv0gyb_j.css';
import '../../css/r/rkoocsb8y.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fojrlp28i"/><path class="jfv0gyb_j"/><path class="rkoocsb8y"/>`,
		"fallback": "medical-icon:infectious-diseases",
	});
}

export default Component;
