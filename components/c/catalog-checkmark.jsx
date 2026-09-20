import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd97r8uzh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sd97r8uzh"/>`,
		"fallback": "pajamas:catalog-checkmark",
	});
}

export default Component;
