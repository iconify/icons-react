import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-g74icta.css';
import '../../css/s/sjzg4vb4w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-g74icta"/><path class="sjzg4vb4w"/>`,
		"fallback": "energy-icons:file-text-20",
	});
}

export default Component;
