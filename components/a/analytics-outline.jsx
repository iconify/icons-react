import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sygr84b-x.css';
import '../../css/k/k8s9wh9wt.css';
import '../../css/j/jdy8g-bst.css';
import '../../css/u/uhh-41b9t.css';
import '../../css/b/b1zw3zbim.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sygr84b-x"/><circle class="k8s9wh9wt"/><circle class="jdy8g-bst"/><circle class="uhh-41b9t"/><circle class="b1zw3zbim"/>`,
		"fallback": "ion:analytics-outline",
	});
}

export default Component;
