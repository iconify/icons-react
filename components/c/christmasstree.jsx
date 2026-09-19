import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thuxc19tu.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thuxc19tu"/>`,
		"fallback": "whh:christmasstree",
	});
}

export default Component;
