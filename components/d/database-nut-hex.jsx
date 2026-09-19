import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6k78tbxq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6k78tbxq"/>`,
		"fallback": "gravity-ui:database-nut-hex",
	});
}

export default Component;
