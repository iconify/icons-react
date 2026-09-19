import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm0z6iaql.css';

const viewBox = {"width":391,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm0z6iaql"/>`,
		"fallback": "file-icons:goreleaser",
	});
}

export default Component;
