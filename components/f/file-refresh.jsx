import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbigfv4ml.css';
import '../../css/b/b7y_ypb6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbigfv4ml"/><path class="b7y_ypb6g"/>`,
		"fallback": "vaadin:file-refresh",
	});
}

export default Component;
