import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj6-xlb2h.css';

const viewBox = {"width":20,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj6-xlb2h"/>`,
		"fallback": "icomoon-free:embed2",
	});
}

export default Component;
