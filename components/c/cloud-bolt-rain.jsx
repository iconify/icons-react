import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a5cyknb5g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a5cyknb5g"/>`,
		"fallback": "f7:cloud-bolt-rain",
	});
}

export default Component;
