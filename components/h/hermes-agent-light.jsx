import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o54po1hhg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o54po1hhg"/>`,
		"fallback": "selfhst:hermes-agent-light",
	});
}

export default Component;
