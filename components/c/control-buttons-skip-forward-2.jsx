import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvrgnz8qg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvrgnz8qg"/>`,
		"fallback": "streamline-block:control-buttons-skip-forward-2",
	});
}

export default Component;
