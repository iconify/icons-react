import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm5flfbxs.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm5flfbxs"/>`,
		"fallback": "devicon-plain:discordjs-wordmark",
	});
}

export default Component;
