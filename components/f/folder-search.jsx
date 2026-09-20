import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo0xyvbqi.css';
import '../../css/g/g5pmz6bgx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo0xyvbqi"/><path class="g5pmz6bgx"/>`,
		"fallback": "vaadin:folder-search",
	});
}

export default Component;
