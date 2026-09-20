import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3rztpdiw.css';
import '../../css/l/l86idpbxk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3rztpdiw"/><path class="l86idpbxk"/>`,
		"fallback": "vaadin:chart-grid",
	});
}

export default Component;
