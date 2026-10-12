import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/n/n2yjebcql.css';
import '../../css/c/csq5cmbcg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="n2yjebcql"/><path class="csq5cmbcg"/>`,
		"fallback": "energy-icons:arrow-circle-left-20",
	});
}

export default Component;
