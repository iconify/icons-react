import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y67h5_-rv.css';
import '../../css/x/xz7mt0bwn.css';
import '../../css/c/c8zh9dbsj.css';
import '../../css/c/cj6vcz96l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y67h5_-rv"/><path class="xz7mt0bwn"/><path class="c8zh9dbsj"/><path clip-rule="evenodd" class="cj6vcz96l"/></g>`,
		"fallback": "streamline-plump-color:bomb-flat",
	});
}

export default Component;
