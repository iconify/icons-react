import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdoh_1bvl.css';
import '../../css/b/b0km5dbta.css';
import '../../css/u/u9yepu2ko.css';
import '../../css/y/yym454evr.css';
import '../../css/w/wp-7sd7au.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="mdoh_1bvl"/><circle class="b0km5dbta"/><circle class="u9yepu2ko"/><circle class="yym454evr"/><path class="wp-7sd7au"/>`,
		"fallback": "carbon:chart-logistic-regression",
	});
}

export default Component;
