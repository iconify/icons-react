import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2o6txvom.css';
import '../../css/s/syec1nbwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v2o6txvom"/><path class="syec1nbwq"/>`,
		"fallback": "selfhst:dumbbudget",
	});
}

export default Component;
