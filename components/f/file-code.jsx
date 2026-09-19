import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9in7kr6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y9in7kr6t"/>`,
		"fallback": "gravity-ui:file-code",
	});
}

export default Component;
